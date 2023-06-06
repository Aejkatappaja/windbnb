import { StayType } from "@/types/stay";
import create from "zustand";

interface DataStoreState {
  data: StayType[];
  setData: (newData: StayType[]) => void;
  city: string;
  setCity: (newCity: string) => void;
  guests: number;
  setGuests: (newGuests: number) => void;
}

export const useDataStore = create<DataStoreState>((set) => ({
  city: "",
  setCity: (newCity) => set(() => ({ city: newCity })),
  data: [],
  setData: (newData) => set(() => ({ data: newData })),
  guests: 0,
  setGuests: (newGuests) => set(() => ({ guests: newGuests })),
}));
