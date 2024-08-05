import prisma from "@/utils/DB";
import { UpdateUserDTO } from "@/utils/Dtos";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

interface Props {
  params: { id: string };
}

/**
 * @method DELETE
 * @route ~/api/users/profile/:id
 * @dec  Delete User
 * @access Private
 */
export async function DELETE(req: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!user) {
      return NextResponse.json({ message: "User Not Found!" }, { status: 404 });
    }
    const jwtToken = req.cookies.get("JwtToken");
    const authToken = jwtToken?.value as string;

    const userFromToken = jwt.verify(
      authToken,
      process.env.SECRET_KEY as string
    ) as JwtPayload;

    if (userFromToken.id === user.id) {
      await prisma.user.delete({
        where: { id: parseInt(params.id) },
      });

      return NextResponse.json(
        { message: "Your (Profile) Account has been Deleted!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { message: "Only the user himself can delete his account" },
      { status: 403 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error!", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// ..................

/**
 * @method GET
 * @route ~/api/users/profile/:id
 * @dec  Get Profile By Id
 * @access Private
 */
export async function GET(req: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
      select: {
        id: true,
        email: true,
        username: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    if (!user) {
      return NextResponse.json({ message: "User Not Found!" }, { status: 404 });
    }
    const jwtToken = req.cookies.get("JwtToken");
    const authToken = jwtToken?.value as string;

    const userFromToken = jwt.verify(
      authToken,
      process.env.SECRET_KEY as string
    ) as JwtPayload;

    if (userFromToken === null || userFromToken.id !== user.id) {
      return NextResponse.json(
        { message: "You are not allowed " },
        { status: 403 }
      );
    }
    return NextResponse.json(user, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error!", error: (error as Error).message },
      { status: 500 }
    );
  }
}

// ..................

/**
 * @method PUT
 * @route ~/api/users/profile/:id
 * @dec  Update User Profile
 * @access Private
 */
export async function PUT(req: NextRequest, { params }: Props) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: parseInt(params.id) },
    });

    if (!user) {
      return NextResponse.json({ message: "User Not Found!" }, { status: 404 });
    }

    const jwtToken = req.cookies.get("JwtToken");
    const authToken = jwtToken?.value as string;

    let userFromToken;
    try {
      userFromToken = jwt.verify(
        authToken,
        process.env.SECRET_KEY as string
      ) as jwt.JwtPayload;
    } catch (error) {
      return NextResponse.json({ message: "Invalid Token!" }, { status: 401 });
    }

    if (!userFromToken || userFromToken.id !== user.id) {
      return NextResponse.json(
        { message: "You are not allowed" },
        { status: 403 }
      );
    }

    const body = (await req.json()) as UpdateUserDTO;

    if (body.password) {
      if(body.password.length >6){
        return NextResponse.json(
          { message: "Password should by minimum 6 char"  },
          { status: 400 }
        );
      }else{
        const salt = await bcrypt.genSalt(10);
        body.password = await bcrypt.hash(body.password, salt);
      }

    }

    const updatedUser = await prisma.user.update({
      where: { id: parseInt(params.id) },
      data: {
        username: body.username,
        email: body.email,
        password: body.password,
      },
      select:{
        id: true,
        email: true,
        username: true,
        isAdmin: true,
        createdAt: true,
        updatedAt: true,
      }
    });

    return NextResponse.json(updatedUser, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error!", error: (error as Error).message },
      { status: 500 }
    );
  }
}