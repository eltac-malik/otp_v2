import { sideList } from "@/shared/routes";
import { useUserInfo } from "@/shared/store";

export const useSidebar = () => {
  const { userInfo } = useUserInfo();
  const sidebarList = sideList.filter((item) => {
    return item.permission.includes(userInfo.user.role);
  });

  return { sidebarList };
};
