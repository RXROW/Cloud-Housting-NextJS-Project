import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
    console.log(req.nextUrl);

    // Handle CORS
    const res = NextResponse.next();
    const allowedOrigins = [
        'https://cloud-housting-next-4ul5kepth-eslams-projects-b3899e24.vercel.app',
        'http://localhost:3000'
    ];
    
    const origin = req.headers.get('Origin') as string;

    if (allowedOrigins.includes(origin)) {
        res.headers.append('Access-Control-Allow-Origin', origin);
    } else {
        res.headers.append('Access-Control-Allow-Origin', 'null');
    }

    res.headers.append('Access-Control-Allow-Credentials', 'true');
    res.headers.append('Access-Control-Allow-Methods', 'GET, DELETE, PATCH, POST, PUT');
    res.headers.append('Access-Control-Allow-Headers', 
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    );

    // Handle JWT token and routing logic
    const jwtToken = req.cookies.get("JwtToken");
    const token = jwtToken?.value as string;

    if (!token) {
        if (req.nextUrl.pathname.startsWith("/api/users/profile/")) {
            return NextResponse.json(
                { message: 'no token provided, access denied' },
                { status: 401 } // Unauthorized
            );
        }
    } else {
        if (
            req.nextUrl.pathname === "/login" ||
            req.nextUrl.pathname === "/register"
        ) {
            return NextResponse.redirect(new URL("/", req.url));
        }
    }

    return res; // Return the modified response
}

export const config = {
    matcher: ["/api/users/profile/:path*", "/login", "/register"]
}
