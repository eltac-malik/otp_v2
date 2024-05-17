import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import cn from "classnames";

import { Wrapper } from "@/components/Wrapper";

import { MdKeyboardArrowRight } from "react-icons/md";

export const Settings = () => {
  const location = useLocation();
  return (
    <Wrapper title="Parametrlər">
      <div className="w-full h-[84vh] rounded-2xl border-1 p-10 pl-4 pr-14 border-b-1 b-x-sh bg-white flex items-start justify-start">
        <div className="w-64 h-full pr-4 border-r-1">
          <Link
            to="language"
            className={`w-full my-1 h-10 rounded-xl font-medium text-def border-1 flex items-center justify-between p-1 ${cn(
              {
                "bg-base text-white":
                  location.pathname === "/settings/language",
              }
            )}`}
          >
            Dil
            <MdKeyboardArrowRight size={17} />
          </Link>

          <Link
            to="notification"
            className={`w-full my-1 h-10 rounded-xl font-medium text-def border-1 flex items-center justify-between p-1 ${cn(
              {
                "bg-base text-white":
                  location.pathname === "/settings/notification",
              }
            )}`}
          >
            Bildirişlər
            <MdKeyboardArrowRight size={17} />
          </Link>
        </div>
        <div className="w-full ml-3">
          <Outlet />
        </div>
      </div>
    </Wrapper>
  );
};
