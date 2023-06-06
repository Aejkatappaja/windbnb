import { StayType } from "@/types/stay";
import { endpoint } from "@/utils/endpoint";

export async function getAllStays(
  city?: string,
  guests?: number
): Promise<StayType[]> {
  let url = `${endpoint}/stays`;

  if (city) {
    url += `?city=${city}`;
  }

  if (guests) {
    url += `?guests=${guests}`;
  }

  if (city && guests) {
    url += `?city=${city}&guests=${guests}`;
  }
  const res: Response = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.stays;
}
