import React from "react";

type TWrapper = {
  title: string;
  children: React.ReactNode;
};

export const Wrapper: React.FC<TWrapper> = ({ title, children }) => {
  return (
    <div className="w-full flex items-center justify-start flex-col">
      <h1 className="w-full flex items-center justify-start font-bold text-3xl mb-7">
        {title}
      </h1>
      {children}
    </div>
  );
};
