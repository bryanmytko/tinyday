import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import { Prisma } from "@prisma/client";

import prisma from "../../../../../lib/prisma";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PASSWORD_REGEX =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,256}$/;

const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();

    if (!password.match(PASSWORD_REGEX))
      return NextResponse.json({
        status: 400,
        message: "Invalid Password.",
        data: "Minimum eight characters, at least one upper and lower case character, one number and one special character.",
      });

    if (!email.match(EMAIL_REGEX))
      return NextResponse.json({
        status: 400,
        message: "Invalid email address",
        data: "Incorrect email format",
      });

    const hashedPassword = await hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ status: 201, message: "Success" });
  } catch (e) {
    if (e instanceof Prisma.PrismaClientKnownRequestError) {
      if (e.code === "P2002") {
        return NextResponse.json({
          status: 400,
          message: "Invalid email address",
          data: "That email already exists",
        });
      }
    }

    return NextResponse.json({ status: 400, message: "Something went wrong." });
  }
};

export { POST };
