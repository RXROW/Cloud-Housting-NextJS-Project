import { NextRequest, NextResponse } from "next/server";

import { cookies } from "next/headers";

/**
 * @method GET
 * @route ~/api/users/logout
 * @desc  Logout User
 * @access Public
 */
export async function GET(req: NextRequest) {
  try {  
    cookies().delete("JwtToken");
    return NextResponse.json(
      { message: "Logout !" },
      { status: 200 }
    );
 

 
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error!", error },
      { status: 500 }
    );
  }
}
