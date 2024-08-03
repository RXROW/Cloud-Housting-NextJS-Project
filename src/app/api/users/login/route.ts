import { NextRequest, NextResponse } from "next/server";
import { LoginZodSchema } from "@/utils/validationSchemas";
import prisma from "@/utils/DB";
import bcrypt from "bcryptjs";
import { loginUserDTO } from "@/utils/Dtos";
import { generateCookies } from "@/utils/generateToken";

/**
 * @method POST
 * @route ~/api/users/login
 * @desc  Login User
 * @access Public
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as loginUserDTO;
    const validation = LoginZodSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (!user) {
      return NextResponse.json(
        { message: "Invalid Email or Password!" },
        { status: 400 }
      );
    }

    const isPasswordMatching = await bcrypt.compare(
      body.password,
      user.password
    );
    if (!isPasswordMatching) {
      return NextResponse.json(
        { message: "Invalid Email or Password!" },
        { status: 400 }
      );
    }

    const cookie = generateCookies({
      id: user.id,
      isAdmin: user.isAdmin,
      username: user.username,
    });

    return NextResponse.json(
      { message: "Authenticated" },
      {
        status: 200,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error!", error },
      { status: 500 }
    );
  }
}
