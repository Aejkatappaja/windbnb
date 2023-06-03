import create from "zustand";

interface DataStoreState {
  city: string;
  setCity: (newCity: string) => void;
}

export const useDataStore = create<DataStoreState>((set) => ({
  city: "",
  setCity: (newCity) => set(() => ({ city: newCity })),
}));
