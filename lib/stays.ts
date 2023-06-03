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
