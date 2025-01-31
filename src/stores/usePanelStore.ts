import { create } from "zustand";

interface PanelState {
  leftPanelWidth: number;
  rightPanelWidth: number;
  setSizes: (sizes: { leftPanelWidth: number; rightPanelWidth: number }) => void;
}

export const usePanelStore = create<PanelState>((set) => ({
  leftPanelWidth: 50,
  rightPanelWidth: 50,
  setSizes: (sizes) => set(sizes),
}));