"use client";
import RotatingText from "@/components/ui/rotatingText";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";

export const PageLoader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        setIsVisible(false);
      }, 500);
    }, 6000);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`${
        isAnimating ? "translate-y-[-100%] " : ""
      } fixed inset-0 z-[9999] overflow-hidden bg-app-background transition-transform duration-500 ease-linear text-white min-h-[100vh] max-w-[1500px] m-auto flex items-center justify-center`}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center"
      >
        <h2 className="font-[400] text-[2rem] sm:text-[4rem] text-background">
          Crypto Vault
        </h2>

        <RotatingText
          texts={["Bitcoin", "Ethereum", "Dogecoin", "Hyperliquid"]}
          mainClassName="shadow-md font-space-grotesk px-4 font-[800] text-[2rem] sm:text-[4rem] sm:px-4 md:px-6 bg-periwinkle-blue overflow-hidden justify-center rounded-md"
          staggerFrom={"last"}
          initial={{ y: "100%" }}
          animate={{ y: 0 }}
          exit={{ y: "-120%" }}
          staggerDuration={0.03}
          splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          rotationInterval={1500}
          auto={true}
        />
      </motion.div>
    </div>
  );
};

export default PageLoader;
