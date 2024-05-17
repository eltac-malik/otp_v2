import React from "react";
import { Input } from "@nextui-org/react";

type TFormInput = {
  label?: string;
  className?: string;
  type?: "text" | "number" | "email";
  placeholder?: string;
  register?: any;
};

export const FormInput: React.FC<TFormInput> = ({
  label,
  className,
  type = "text",
  placeholder,
  register,
}) => {
  return (
    <Input
      type={type}
      label={label}
      className={className}
      placeholder={placeholder}
      {...register}
      labelPlacement="outside"
      classNames={{
        inputWrapper: [`w-full h-12 rounded-lg border-1 bg-white hover:bg-white`],
      }}
    />
  );
};
