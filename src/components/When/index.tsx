import React from "react";

type TWhen = {
  children: React.ReactNode;
  condition: boolean;
};

export const When: React.FC<TWhen> = ({ children, condition }) => {
  return condition ? children : null;
};
