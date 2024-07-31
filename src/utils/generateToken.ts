import jwt from 'jsonwebtoken';
import { JWTPayload } from './types';
 

// Genereate JWT Token
export function generateJWT(jwtPayload: JWTPayload): string {
    const privateKey = process.env.JWT_SECRET || "privateKey";

    const token = jwt.sign(jwtPayload, privateKey, {
        expiresIn: '30d'
    });

    return token;
}