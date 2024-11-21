import { create } from "zustand";

export const useFactor = create((set) => ({
  flag: false,
  setFlag: (status) => set({ flag: status }),
  selectedFactor: null,
  setSelectedFactor: (data) => set({ selectedFactor: data }),
}));
