import { create } from "zustand";

interface DemoStoreInterface {
    foo: string;
    setFoo: (foo: string) => void;
}

export const useTestStore = create<DemoStoreInterface>((set) => ({
    foo: "bar",
    setFoo: (foo) => {
      console.log("🛑 setFoo called");
      set({ foo });
    },
}));
