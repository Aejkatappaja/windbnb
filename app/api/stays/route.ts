import { NextRequest, NextResponse } from "next/server";
import { StayType } from "@/types/stay";
import stays from "@/data/stays.json";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");
  const guests = url.searchParams.get("guests");

  if (city && guests) {
    const numGuests = parseInt(guests, 10);
    const filteredStays = stays.filter(
      (stay: StayType) => stay.city === city && stay.maxGuests >= numGuests
    );
    return NextResponse.json({ stays: filteredStays });
  }

  if (city) {
    const filteredStays = stays.filter((stay: StayType) => stay.city === city);
    return NextResponse.json({ stays: filteredStays });
  }

  if (guests) {
    const numGuests = parseInt(guests, 10);
    const filteredStays = stays.filter(
      (stay: StayType) => stay.maxGuests >= numGuests
    );
    return NextResponse.json({ stays: filteredStays });
  }

  return NextResponse.json({ stays });
}
