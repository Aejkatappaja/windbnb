import { StayType } from "@/types/stay";
import { endpoint } from "@/utils/endpoint";

export async function getAllStays(
  city?: string,
  guests?: number
): Promise<StayType[]> {
  let url = `${endpoint}/stays`;

  const queryParams: string[] = [];

  if (city) {
    queryParams.push(`city=${city}`);
  }

  if (guests) {
    queryParams.push(`guests=${guests}`);
  }

  if (queryParams.length > 0) {
    url += `?${queryParams.join("&")}`;
  }

  const res: Response = await fetch(url);

  const data = await res.json();

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.stays;
}
