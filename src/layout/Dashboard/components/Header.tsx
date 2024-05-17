import { Avatar } from "@nextui-org/react";

export const Header = () => {
  return (
    <div className="w-full fixed h-[80px] !z-50 px-5 sm:px-2 flex items-center justify-center bg-dash ">
      <div className="w-full bg-white h-14 z-30 flex items-center justify-between px-2 rounded-2xl dash-shadow">
        <p className="w-16 h-16 rounded-full overflow-hidden cursor-pointer flex items-center justify-start ml-5 font-semibold text-xl">
          OTP
        </p>
        <div className="flex items-center justify-end">
          <h2 className="mr-2 text-sm font-semibold leading-3 "></h2>
          <Avatar className="bg-base text-white" size="sm" />
        </div>
      </div>
    </div>
  );
};
