import { endpoint } from "@/utils/endpoint";

export async function getAllStays() {
  const data = await fetch(`${endpoint}/stays`);

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}
