import { NextResponse } from "next/server";
import { hash } from "bcrypt";

import prisma from "../../../../../lib/prisma";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const POST = async (request: Request) => {
  try {
    const { email, password } = await request.json();
    const hashedPassword = await hash(password, 10);

    if (!email.match(EMAIL_REGEX))
      return NextResponse.json({ message: "error", data: "Invalid email." });

    /* @TODO Handle errors like non-unique and surface a real response */
    await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({ message: "success" });
  } catch (e) {
    return NextResponse.json({ message: "Something went wrong.", data: e });
  }
};

export { POST };
