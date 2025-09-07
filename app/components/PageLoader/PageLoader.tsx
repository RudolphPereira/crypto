"use client";
import RotatingText from "@/components/ui/rotatingText";
import { motion } from "motion/react";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";

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
        className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center w-full justify-center"
      >
        <div className="flex flex-1 items-center justify-end gap-2 sm:gap-3">
          <div className="w-[3rem] h-[3rem] sm:w-[6rem] sm:h-[6rem]">
            <Image
              src={logo}
              width={100}
              height={100}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </div>

          <h2 className="font-[500] text-[2rem] sm:text-[4rem] text-background">
            Crypto Vault
          </h2>
        </div>

        <div className="flex-1 flex justify-start">
          <RotatingText
            texts={["Hyperliquid", "Bitcoin", "Ethereum", "Dogecoin"]}
            mainClassName="shadow-md font-space-grotesk px-4 font-[800] text-[2rem] sm:text-[4rem] sm:px-4 md:px-6 bg-periwinkle-blue overflow-hidden justify-center rounded-lg"
            staggerFrom={"last"}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-120%" }}
            staggerDuration={0.03}
            splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
            transition={{ type: "spring", damping: 30, stiffness: 250 }}
            rotationInterval={1500}
            loop
            auto={!isAnimating}
            animatePresenceMode="wait"
            animatePresenceInitial={false}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default PageLoader;
