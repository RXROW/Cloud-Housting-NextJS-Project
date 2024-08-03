import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

 
export function middleware(req: NextRequest) {
    const jwtToken = req.cookies.get("JwtToken");
    const authToken =jwtToken?.value as string;

    if (!authToken) {
      return NextResponse.json(
        { message: "No Token Provided! From Middleware" },
        { status: 400 }
      );
    }

   const secretKey = "yCVUrwul0vSBqElQKPVjsvf0TasBtnxR";
    if (!secretKey) {
      return NextResponse.json(
        { message: "Internal Server Error: Missing Secret Key From Middleware" },
        { status: 500 }
      );
 } 
}
export const config = {
  matcher: ['/api/users/profile/:path*'],  
};
