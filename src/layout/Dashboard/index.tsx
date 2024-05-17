import React, { useState } from "react";
import cn from "classnames";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

type TLayout = {};

export const Layout: React.FC<TLayout> = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const [isFull, setIsFull] = useState(false);
  return (
    <div
      className={`w-full flex items-center justify-start flex-col ${cn({
        "full-drawer": isFull,
      })}`}
    >
      <Header />
      <div
        className={`w-full mt-[80px] dash_height flex items-start dashboard bg-dash overflow-hidden overflow-y-scroll justify-start ${cn(
          {
            "mobile-side": isMobile,
          }
        )} transition-all
        ${cn({ "pr-5": !isMobile })}
        `}
      >
        <Sidebar isFull={isFull} setIsFull={setIsFull} />
        <div
          className={`w-full ${
            isFull ? "ml-[100px]" : "ml-[290px]"
          } flex items-start justify-start transition-all overflow-scroll
          ${cn({ "!ml-0 px-3": isMobile })}
          `}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};
