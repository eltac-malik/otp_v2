import React from "react";
import { motion } from "framer-motion";

type IAnimationLayout = {
  children?: React.ReactNode;
  className?: string;
  position?: "left" | "right";
};

const target = {
  left: "marginLeft",
  right: "marginRight",
};

export const AnimationLayout: React.FC<IAnimationLayout> = ({
  children,
  className,
  position = "marginLeft",
}) => {
  return (
    <motion.div
      className={`w-full ${className}`}
      initial={{ [target[position]]: 1500 }}
      animate={{ [target[position]]: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
