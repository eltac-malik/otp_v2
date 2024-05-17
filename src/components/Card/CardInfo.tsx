import React from "react";
import { Link } from "react-router-dom";

type TCard = {
  item?: any;
};

export const CardInfo: React.FC<TCard> = ({ item }) => {
  return (
    <Link
      to={`/`}
      className="card-info w-full flex items-start justify-start flex-col p-2 transition-all rounded-sm"
    >
      <p className="w-full flex items-center justify-start font-bold	leading-5 text-lg text-[#00B074] mb-1 sm:mb-0">{`${item?.price} ${item?.currency}`}</p>
      <p className="w-full text-def text-[#595959] text-sm">
        <span className="font-semibold text-black mb-1">{item?.location}</span>{" "}
        - Bakı
      </p>
      <p className="w-full text-def text-[#595959] text-sm font-light">{`${item?.room}  ${item?.width} ${item?.floor}`}</p>
      <p className="text-[#78858F] text-[12px] mt-1 sm:mt-0">16 January 2017</p>
    </Link>
  );
};
