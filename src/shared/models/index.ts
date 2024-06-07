export type TDrawer = {
  isDrawer: boolean;
  setIsDrawer: (val: boolean) => void;
};

export type TFavoriteOperation = {
  favoriteList: string[];
  setFavoriteList: (val: string[]) => void;
};

export interface IUserInfo {
  sub: string;
  userCode: string;
  lastname: string;
  firstname: string;
  role: string;
  iat: number;
  exp: number;
}

export type TUserInfo = {
  userInfo: IUserInfo | null;
  setUserInfo: (val: any) => void;
};

export type TToken = {
  token: string;
  setToken: (val: string) => void;
};

export type TUseSidebarSize = {
  isFull: boolean;
  setIsFull: (val: boolean) => void;
};
