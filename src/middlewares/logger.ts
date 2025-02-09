import { NextRequest, NextResponse } from "next/server";
import chalk from "chalk";

export function logger(req: NextRequest) {

    chalk.level = 3; // Force l'activation des couleurs

    // console.log(chalk.green(
    //     `${new Date().toISOString()}    ${req.method}   ${req.nextUrl.pathname}`,
    // ));
    return NextResponse.next();
}
