import React from "react";
import { Button } from "@nextui-org/react";

import { FormSelect } from "@/components/Select";
import { announceTypes, estateList, sellTypes } from "@/shared/constant/estate";
import { PriceBox } from "./PriceBox";

export const FilterBar = () => {
  return (
    <div className="w-full h-12 flex items-center justify-between">
      <div className="w-11/12 h-12 mr-2 rounded-lg flex items-start justify-start border-1 bg-white">
        <FormSelect
          condition
          options={announceTypes}
          baseClass={`w-40 !h-[46px] !min-h-[46px]`}
          mainWrapper={`w-40 !h-[46px] !min-h-[46px]`}
          placeholder="Elanın tipi"
          cls={`!w-40`}
          triggerClass={
            "w-40 !h-[46px] !min-h-[46px] bg-white border-r-1 rounded-none hover:bg-white rounded-l-lg"
          }
        />
        <FormSelect
          condition
          options={estateList}
          baseClass={`w-40 !h-[46px] !min-h-[46px]`}
          mainWrapper={`w-40 !h-[46px] !min-h-[46px]`}
          placeholder="Elanın növü"
          cls={`!w-40`}
          triggerClass={
            "w-40 !h-[46px] !min-h-[46px] bg-white border-r-1 rounded-none hover:bg-white"
          }
        />
        <FormSelect
          condition
          options={sellTypes}
          baseClass={`w-40 !h-[46px] !min-h-[46px]`}
          mainWrapper={`w-40 !h-[46px] !min-h-[46px]`}
          placeholder="Satış tipi"
          cls={`!w-40`}
          isMulti
          triggerClass={
            "w-40 !h-[46px] !min-h-[46px] bg-white border-r-1 rounded-none hover:bg-white"
          }
        />
        <PriceBox />
      </div>
      <Button className="bg-base h-11 w-1/12 rounded-lg text-white font-medium">
        Axtar
      </Button>
    </div>
  );
};
