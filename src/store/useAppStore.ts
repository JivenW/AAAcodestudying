import { create } from 'zustand';

type AppState = {
  databaseReady: boolean;
  setDatabaseReady: (ready: boolean) => void;
};

export const useAppStore = create<AppState>((set) => ({
  databaseReady: false,
  setDatabaseReady: (ready) => set({ databaseReady: ready }),
}));
