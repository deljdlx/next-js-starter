import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { applyMiddlewares } from "./middlewares/index";


// Middleware exécuté sur toutes les requêtes
export function middleware(req: NextRequest) {
    return applyMiddlewares(req);
}

// Appliquer ce middleware sur toutes les routes
export const config = {
    matcher: "/:path*",
};
