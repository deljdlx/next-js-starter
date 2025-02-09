import { create } from "zustand";

interface DemoStoreInterface {
    debug: boolean;
    setDebug: (debug: boolean) => void;
}

export const useDemoStore = create<DemoStoreInterface>((set) => ({
    debug: true,
    setDebug: (debug) => {
      console.log("🛑 setDebug: " + debug);
      set({ debug });
    },
}));
