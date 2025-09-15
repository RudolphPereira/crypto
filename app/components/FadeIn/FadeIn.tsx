"use client";
import { motion } from "motion/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  additionalClass?: string;
  delay?: number;
  initialY?: number;
  exitY?: number;
  disableExit?: boolean;
  duration?: number;
};

export const FadeIn = ({
  children,
  additionalClass,
  delay,
  initialY,
  exitY,
  disableExit,
  duration,
}: Props) => {
  return (
    <motion.div
      className={`fadeIn relative ${additionalClass}`}
      initial={{ opacity: 0, y: initialY ?? 20, filter: "blur(5px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={
        disableExit
          ? undefined
          : { opacity: 0, y: exitY ?? 20, filter: "blur(5px)" }
      }
      transition={{
        duration: duration ?? 0.5,
        delay: delay,
        ease: [0, 0.5, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
};
