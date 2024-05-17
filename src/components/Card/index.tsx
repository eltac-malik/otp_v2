import React, { useState } from "react";
import { useFavorite } from "@/shared/hooks";

import { ImageSlider } from "./ImageSlider";
import { CardInfo } from "./CardInfo";

import { HeartSelectSvg, HeartSvg } from "@/assets/icons/Heart";

type TCard = {
  item?: any;
};

export const Card: React.FC<TCard> = ({ item }) => {
  const { addFavorite, removeFavorite, hasFavorite } = useFavorite();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="card-button w-full flex items-center !z-10 justify-start flex-col overflow-hidden bg-white rounded-sm relative">
      <div
        className="absolute top-2 right-2 z-10 transition-all w-9 h-9 flex items-center justify-center"
        onClick={() => setIsFavorite(!isFavorite)}
      >
        {isFavorite || hasFavorite(item?.id) ? (
          <HeartSelectSvg
            onClick={() => removeFavorite(item?.id)}
            className="text-[#00B074] cursor-pointer w-[25px] sm:w-[20px] h-[25px] sm:h-[25px]"
          />
        ) : (
          <HeartSvg
            onClick={() => addFavorite(item?.id)}
            className="text-white cursor-pointer  w-[25px] sm:w-[20px] h-[25px] sm:h-[25px]"
          />
        )}
      </div>

      <ImageSlider item={item} />
      <CardInfo item={item} />
    </div>
  );
};
