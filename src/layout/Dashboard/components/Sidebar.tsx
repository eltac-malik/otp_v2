import React, { useRef } from "react";
import Drawer from "react-modern-drawer";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";

import { When } from "@/components/When";
import { useDrawer } from "@/shared/store";
import { useSidebar } from "@/shared/hooks";
import { SideItem } from "./SideItem";
import { Logout } from "./Logout";

import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { SideHide } from "@/assets/icons/SideHide";

type TSidebar = {
  isFull: boolean;
  setIsFull: any;
};

export const Sidebar: React.FC<TSidebar> = ({ isFull, setIsFull }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 900px)" });
  const arrowRef = useRef<HTMLDivElement | null>(null);

  const { sidebarList } = useSidebar();
  const { isDrawer, setIsDrawer } = useDrawer();

  const handleClick = () => setIsDrawer(!isDrawer);

  return (
    <Drawer
      open={isDrawer}
      onClose={handleClick}
      direction="left"
      className="w-full flex items-center justify-start flex-col"
      enableOverlay={isMobile}
    >
      <div className="w-full h-full bg-secondary rounded-2xl relative flex items-center justify-start flex-col p-1">
        <div
          className={`w-full h-full relative flex items-center justify-start flex-col p-1`}
        >
          {sidebarList.map((item) => {
            return <SideItem key={item.id} item={item} isFull={isFull} />;
          })}
        </div>
        <When condition={!isMobile}>
          <>
            <SideHide />
            <div
              onClick={() => arrowRef.current?.click()}
              className="h-9 w-9 absolute bottom-16 right-[-17px] z-max flex items-center justify-center bg-[#EDEDED] rounded-full select-none cursor-pointer"
            >
              <div className="h-7 w-7 rounded-full flex items-center justify-center bg-secondary">
                <motion.div
                  ref={arrowRef}
                  className="flex items-center justify-center"
                  onClick={() => setIsFull(!isFull)}
                  animate={{
                    rotate: !isFull ? 0 : 180,
                  }}
                >
                  <MdOutlineKeyboardArrowLeft color="white" size={30} />
                </motion.div>
              </div>
            </div>
          </>
        </When>

        <Logout isFull={isFull} />
      </div>
    </Drawer>
  );
};
