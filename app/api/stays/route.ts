import { NextResponse } from "next/server";
import stays from "@/data/stays.json";

export async function GET() {
  return NextResponse.json({ stays });
}
