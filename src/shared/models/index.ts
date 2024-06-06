export type TDrawer = {
  isDrawer: boolean;
  setIsDrawer: (val: boolean) => void;
};

export type TFavoriteOperation = {
  favoriteList: string[];
  setFavoriteList: (val: string[]) => void;
};

export interface IUserInfo {
  access_token: string;
  user: {
    avatar: string;
    email: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
    role: string;
    _id: string;
  };
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
