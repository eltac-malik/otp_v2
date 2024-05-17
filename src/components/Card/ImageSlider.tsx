import React from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type TImageSlider = {
  item?: any;
};

export const ImageSlider: React.FC<TImageSlider> = ({ item }) => {
  const shouldIncludeNavigation = item?.images?.length !== 1;
  return (
    <Swiper
      navigation={shouldIncludeNavigation ? true : undefined} 
      modules={shouldIncludeNavigation ? [Navigation] : []} 
      className={`card-img w-full h-[250px] sm:h-[180px] rounded-sm select-none`}
      style={{ margin: "0px" }}
      speed={200}
      loop
    >
      {item?.images?.map((image: string, index: number, arr: string[]) => {
        return (
          <SwiperSlide key={image}>
            <Link to={`/${image}`}>
              {index === arr.length - 1 && arr.length !== 1 ? (
                <div className="relative w-full h-full">
                  <img
                    className="object-cover	w-full h-full filter blur-[2px]"
                    width={200}
                    height={180}
                    src={image}
                    alt={""}
                  />
                  <span className="w-full text-white flex items-center hover:text-base justify-center underline absolute text-def font-semibold  top-1/3 left-1/2 transform -translate-x-1/2 translate-y-1/2">
                    Daha çox şəkilə bax
                  </span>
                </div>
              ) : (
                <img
                  className="object-cover	w-full h-full"
                  width={200}
                  height={180}
                  src={image}
                  alt={""}
                />
              )}
            </Link>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
