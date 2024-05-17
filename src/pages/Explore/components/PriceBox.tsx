import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Input } from "@nextui-org/react";

import { useOutsideClick } from "@/shared/hooks";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";

export const PriceBox = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const priceRef = useRef<HTMLDivElement | null>(null);

  useOutsideClick(priceRef, () => {
    setIsVisible(false);
  });

  return (
    <div
      ref={priceRef}
      onClick={() => setIsVisible(!isVisible)}
      className="relative w-40 !h-[46px] !min-h-[46px] bg-white border-r-1 rounded-none text-[#71717A] flex items-center justify-between pl-2 select-none cursor-pointer text-sm leading-3 hover:bg-[#e1e1e5]"
    >
      Qiymət
      <motion.div
        animate={{ rotate: isVisible ? 180 : 0 }}
        className="h-full w-10 flex items-center justify-center"
      >
        <MdOutlineKeyboardArrowDown size={19} />
      </motion.div>
      {isVisible && (
        <div className="w-64 h-auto absolute top-[55px] left-[-45px] rounded-sm p-2 bg-white box-heavy-sh z-50">
          <Input
            className="my-1"
            classNames={{ inputWrapper: `!h-[40px] border-1 bg-white` }}
            placeholder="Minimum"
          />
          <Input
            className="my-1"
            classNames={{ inputWrapper: `!h-[40px] border-1 bg-white` }}
            placeholder="Maksimum"
          />
        </div>
      )}
    </div>
  );
};
