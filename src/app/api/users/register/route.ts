import { NextRequest, NextResponse } from "next/server";
import { createRegisterZodSchema } from "@/utils/validationSchemas";

import prisma from "@/utils/DB";
import bcrypt from "bcryptjs";
import { registerUserDTO } from "@/utils/Dtos";
import { generateCookies, generateJWT } from "@/utils/generateToken";
import { JWTPayload } from "@/utils/types";
/**
 * @method POST
 * @route ~/api/users/register
 * @dec Create New User
 * @access Public
 */
export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as registerUserDTO;
    const validation = createRegisterZodSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }
    const user = await prisma.user.findUnique({ where: { email: body.email } });
    if (user) {
      return NextResponse.json(
        { message: "User Already Exist !" },
        { status: 400 }
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(body.password, salt);

    const newUser = await prisma.user.create({
      data: {
        username: body.username,
        email: body.email,
        password: hashedPassword,
      },
      select: {
        id: true,
        username: true,
        email: true,
        isAdmin: true,
      },
    });

    const cookie = generateCookies({
      id: newUser.id,
      isAdmin: newUser.isAdmin,
      username: newUser.username,
    });

    return NextResponse.json(
      { ...newUser ,message:"Registered & Authenticated!" },
      {
        status: 201,
        headers: {
          "Set-Cookie": cookie,
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Intrnal Server Erorr !", error },
      { status: 500 }
    );
  }
}
