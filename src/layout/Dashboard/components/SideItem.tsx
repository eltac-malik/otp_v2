import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import cn from "classnames";
import { Tooltip } from "@nextui-org/react";

import { When } from "@/components/When";
import { useTranslation } from "react-i18next";

type TSideItem = {
  item: any;
  isFull: any;
};

export const SideItem: React.FC<TSideItem> = ({ item, isFull }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const handleNavigate = (path: string) => navigate(path);
  return (
    <div
      onClick={() => handleNavigate(item.path)}
      key={item.id}
      className={`w-full h-11 rounded-sm my-1 p-2 flex select-none cursor-pointer items-center justify-start  hover:bg-[#00b07546] 
    ${cn({ ["bg-[#00b07546]"]: item.path === location.pathname })} ${cn({
        ["justify-center"]: isFull,
      })}
    `}
    >
      <When condition={isFull}>
        <Tooltip
          content={t(`${item.title}`)}
          placement="right"
          showArrow
          classNames={{
            base: ["before:bg-white dark:before:bg-white"],
            content: [
              "py-2 px-4 shadow-xl",
              "text-black bg-white from-white to-neutral-400",
            ],
          }}
        >
          <span className="text-white w-full h-full flex items-center justify-center">
            {item.icon()}
          </span>
        </Tooltip>
      </When>
      <When condition={!isFull}>
        <span className="mr-2 text-white">{item.icon()}</span>
        <span className="text-white">{t(`${item.title}`)}</span>
      </When>
    </div>
  );
};
