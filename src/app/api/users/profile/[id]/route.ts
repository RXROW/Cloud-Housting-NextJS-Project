import prisma from "@/utils/DB";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";

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
    const authToken =jwtToken?.value as string;
  
    const userFromToken = jwt.verify(authToken,process.env.SECRET_KEY as string) as JwtPayload;

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
