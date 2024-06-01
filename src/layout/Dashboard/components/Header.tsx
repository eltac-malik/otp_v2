import { Avatar } from "@nextui-org/react";

import OTPLogo from "@/assets/img/logo.jpeg";
import { useUserInfo } from "@/shared/store";

export const Header = () => {
  const { userInfo } = useUserInfo();
  return (
    <div className="w-full fixed h-[80px] !z-50 px-5 sm:px-2 flex items-center justify-center bg-dash ">
      <div className="w-full bg-white h-14 z-30 flex items-center justify-between px-2 rounded-2xl dash-shadow">
        <p className="w-12 h-12rounded-full overflow-hidden cursor-pointer flex items-center justify-center ml-5 font-semibold text-xl">
          <img className="w-full" src={OTPLogo} />
        </p>
        <div className="flex items-center justify-end">
          {userInfo && (
            <h2 className="mr-2 text-sm font-semibold leading-3 ">{`${userInfo?.user?.firstname} ${userInfo?.user?.lastname}`}</h2>
          )}
          <Avatar className="bg-base text-white" size="sm" />
        </div>
      </div>
    </div>
  );
};
