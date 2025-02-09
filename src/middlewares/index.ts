import { NextRequest, NextResponse } from "next/server";
// import { logger } from "./logger";
import { addCustomHeader } from "./addCustomHeader";
import { authMiddleware } from "./auth";
import { logger } from "./logger";

export async function applyMiddlewares(req: NextRequest) {
    let res = NextResponse.next();

    res = logger(req);
    res = addCustomHeader(req, "X-Custom-Header", "MyCustomValue");

    if (req.nextUrl.pathname.startsWith("/dashboard") || req.nextUrl.pathname.startsWith("/profile")) {
        res = await authMiddleware(req);
    }

    return res;
}
