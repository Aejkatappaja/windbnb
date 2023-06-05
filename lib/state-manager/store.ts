import { StayType } from "@/types/stay";
import create from "zustand";

interface DataStoreState {
  data: StayType[];
  setData: (newData: StayType[]) => void;
  city: string;
  setCity: (newCity: string) => void;
}

export const useDataStore = create<DataStoreState>((set) => ({
  city: "",
  setCity: (newCity) => set(() => ({ city: newCity })),
  data: [],
  setData: (newData) => set(() => ({ data: newData })),
}));
