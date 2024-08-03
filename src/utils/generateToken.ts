import jwt from 'jsonwebtoken';
import { JWTPayload } from './types';
import { serialize } from "cookie";
// Generate JWT Token
export function generateJWT(jwtPayload: JWTPayload): string {
    const privateKey = process.env.SECRET_KEY;
    
    if (!privateKey) {
        throw new Error("JWT_SECRET is not defined");
    }

    const token = jwt.sign(jwtPayload, privateKey, {
        expiresIn: '30d',
    });

    return token;
}



// Generate Cookies
export function generateCookies(jwtPayload: JWTPayload): string {
  const token = generateJWT(jwtPayload);
  const cookie = serialize("JwtToken", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // Use secure cookies in production
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // 30 days
  });
  return cookie
}
