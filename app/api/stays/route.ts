// import { NextResponse } from "next/server";
// import stays from "@/data/stays.json";

// export async function GET() {
//   return NextResponse.json({ stays });
// }
import { NextRequest, NextResponse } from "next/server";
import stays from "@/data/stays.json";

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const city = url.searchParams.get("city");

  // Vérifiez si la ville est présente dans la requête
  if (city) {
    const filteredStays = stays.filter((stay) => stay.city === city);
    return NextResponse.json({ stays: filteredStays });
  }

  // Si la ville n'est pas spécifiée, retournez toutes les données
  return NextResponse.json({ stays });
}
