import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { compare } from "bcrypt";

import prisma from "../../../../../lib/prisma";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const result = await prisma.user.findUnique({
          where: {
            email: credentials?.email || "",
          },
        });

        const validPassword =
          credentials?.password &&
          result?.password &&
          (await compare(credentials.password, result.password));

        if (validPassword)
          return {
            id: String(result?.id),
            email: result?.email,
          };

        return null;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
