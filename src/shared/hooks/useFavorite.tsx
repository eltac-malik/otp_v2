import { useFavoriteOperation } from "../store";

export const useFavorite = () => {
  const { favoriteList, setFavoriteList } = useFavoriteOperation();

  const addFavorite = (val: string) => {
    const hasItem = favoriteList.find((item: string) => item === val);
    setFavoriteList(hasItem ? favoriteList : [...favoriteList, val]);
  };

  const removeFavorite = (val: string) => {
    const hasItem = favoriteList.find((item: string) => item === val);
    setFavoriteList(
      hasItem
        ? favoriteList.filter((item: string) => item !== val)
        : favoriteList
    );
  };

  const hasFavorite = (val: string) => {
    return favoriteList.find((item: string) => item === val);
  };

  return {
    favoriteList,
    addFavorite,
    removeFavorite,
    hasFavorite,
  };
};
