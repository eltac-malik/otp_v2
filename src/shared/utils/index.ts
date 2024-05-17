export const getChildListForKey = (arr: any[], parentKey: string) => {
  return arr.filter((item) => item?.parentKey === parentKey);
};
