import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

import {
  TDrawer,
  TFavoriteOperation,
  IUserInfo,
  TUserInfo,
  TToken,
  TUseSidebarSize,
} from "../models";

export const useDrawer = create<TDrawer>((set) => ({
  isDrawer: true,
  setIsDrawer: (val: boolean) => set({ isDrawer: val }),
}));

export const useFavoriteOperation = create(
  persist<TFavoriteOperation>(
    (set) => ({
      favoriteList: [],
      setFavoriteList: (val: string[]) => set({ favoriteList: val }),
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useToken = create(
  persist<TToken>(
    (set) => ({
      token: "",
      setToken: (val: string) => set({ token: val }),
    }),
    {
      name: "token",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useUserInfo = create(
  persist<TUserInfo>(
    (set) => ({
      userInfo: null,
      setUserInfo: (val: IUserInfo | null) => set({ userInfo: val }),
    }),
    {
      name: "userInfo",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export const useSidebarSize = create(
  persist<TUseSidebarSize>(
    (set) => ({
      isFull: false,
      setIsFull: (val: boolean) => set({ isFull: val }),
    }),
    {
      name: "useSidebarSize",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
