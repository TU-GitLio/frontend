import { create } from "zustand";

interface ToggleState {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const useStore = create<ToggleState>((set) => ({
  darkMode: false,
  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode })),
}));

export default useStore;
