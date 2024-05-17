import React from "react";
import { Select, SelectItem } from "@nextui-org/react";
import { UseFormRegisterReturn } from "react-hook-form";
import cn from "classnames";

import { When } from "../When";

import { TFilterSelect, TLocation } from "@/shared/models/ui";

type TSelect = {
  onChange?: (e?: any) => void;
  value?: string;
  isError?: boolean;
  id?: string;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  condition: boolean;
  className?: any;
  triggerClass?: string;
  baseClass?: string;
  mainWrapper?: string;
  cls?: string;
  isMulti?: boolean;
  options?: TLocation[] | TFilterSelect[];
  register?: UseFormRegisterReturn<any>;
};

export const FormSelect: React.FC<TSelect> = ({
  onChange,
  value,
  options = [],
  isError,
  id,
  placeholder = "Seçin",
  condition,
  errorMessage,
  className,
  register,
  triggerClass,
  baseClass,
  mainWrapper,
  isMulti,
  cls,
}) => {
  const onChangeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    register?.onChange(e);
    const selectedObject = options.find(
      (option) => option.value == e.target.value
    );
    if (onChange) onChange(selectedObject);
  };
  return (
    <When condition={condition}>
      <div
        className={`w-full flex items-center justify-start sm:items-start sm:justify-start sm:flex-col ${cls}`}
      >
        <Select
          id={id}
          placeholder={placeholder}
          className={`w-80 ${{ ...className }}`}
          value={value}
          onChange={onChangeSelect}
          isInvalid={isError}
          errorMessage={errorMessage}
          selectionMode={isMulti ? "multiple" : "single"}
          {...register}
          classNames={{
            trigger: `${cn({
              "bg-red-100 hover:bg-red-100": isError,
            })} ${triggerClass}`,
            base: baseClass,
            mainWrapper: mainWrapper,
          }}
        >
          {options.map((item) => (
            <SelectItem key={item.key} value={item.key}>
              {item.value}
            </SelectItem>
          ))}
        </Select>
      </div>
    </When>
  );
};
