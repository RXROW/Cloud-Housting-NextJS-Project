import { NextRequest, NextResponse } from "next/server";
import { LoginZodSchema } from "@/utils/validationSchemas";
 
import prisma from "@/utils/DB";
import bcrypt from "bcryptjs";
import { loginUserDTO } from "@/utils/Dtos";
import { JWTPayload } from "@/utils/types";
import { generateJWT } from "@/utils/generateToken";
/**
 * @method POST
 * @route ~/api/users/login
 * @dec  login User
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
        { message: " Invalid Email Or Password!" },
        { status: 400 }
      );
    }
    const isPasswordMatching = await bcrypt.compare(
      body.password,
      user.password
    );
    if (!isPasswordMatching) {
      return NextResponse.json(
        { message: " Invalid Email Or Password!" },
        { status: 400 }
      );
    }
const jwtPayload :JWTPayload={
  id:user.id,
  isAdmin:user.isAdmin,
  username:user.username,


}
const token = generateJWT(jwtPayload)
 
    return NextResponse.json(
      { message: "Authenticated", token },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Intrnal Server Erorr !", error },
      { status: 500 }
    );
  }
}
