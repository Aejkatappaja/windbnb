// import { endpoint } from "@/utils/endpoint";

// export async function getAllStays() {
//   const data = await fetch(`${endpoint}/stays`);

//   if (!data.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return data.json();
// }

import { endpoint } from "@/utils/endpoint";

export async function getAllStays(city?: string) {
  let url = `${endpoint}/stays`;

  if (city) {
    url += `?city=${city}`;
  }

  const data = await fetch(url);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

// import { NextRequest, NextResponse } from "next/server";
// import stays from "@/data/stays.json";
// import { StayType } from "@/types/stay";

// interface FilteredStaysResponse {
//   stays: StayType[];
// }

// interface AllStaysResponse {
//   stays: StayType[];
// }

// export default async function GET(request: NextRequest): Promise<NextResponse> {
//   const url = new URL(request.url);
//   const city = url.searchParams.get("city");

//   // Vérifiez si la ville est présente dans la requête
//   if (city) {
//     const filteredStays: StayType[] = stays.filter((stay) => {
//       if (Array.isArray(stay)) {
//         return stay.some((s) => s.city === city);
//       }
//       return stay.city === city;
//     });

//     const response: FilteredStaysResponse = { stays: filteredStays };
//     return NextResponse.json(response);
//   }

//   // Si la ville n'est pas spécifiée, retournez toutes les données
//   const allStays: StayType[] = stays;
//   const response: AllStaysResponse = { stays: allStays };
//   return NextResponse.json(response);
// }
