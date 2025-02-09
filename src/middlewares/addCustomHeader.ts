import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export const addCustomHeader = async (req: NextRequest, header: string, value: string) => {
  const response = NextResponse.next();
  response.headers.set(header, value);
  return response;
};
