import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import { JWTPayload } from '@/utils/types';

// Verify Token For API End Point
export function verifyToken(request: NextRequest): JWTPayload | null {
    try {
        const jwtToken = request.cookies.get("JwtToken");
        const token = jwtToken?.value;
        if (!token) return null;

        const privateKey = process.env.SECRET_KEY as string;
        const userPayload = jwt.verify(token, privateKey) as JWTPayload;

        return userPayload;
    } catch (error) {
        console.error("Token verification failed:", error    );  // Useful for debugging
        return null;
    }
}
