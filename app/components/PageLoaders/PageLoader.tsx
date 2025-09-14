"use client";
import React, { useEffect, useState } from "react";
import logo from "../../../public/logo.svg";
import Image from "next/image";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { updatePageLoader } from "@/lib/features/pageLoaderData/pageLoaderSlice";

export const PageLoader = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const pageLoader = useAppSelector((state) => state.pageLoaderData.pageLoader);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!pageLoader) return;
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setIsAnimating(true);
      setTimeout(() => {
        document.body.style.overflow = "";
        dispatch(updatePageLoader(false));
      }, 400);
    }, 450);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  if (!pageLoader) return null;

  return (
    <div
      className={`${
        isAnimating ? "translate-y-[-100%] " : ""
      } fixed inset-0 z-[9988] overflow-hidden bg-app-background transition-transform duration-400 ease-linear text-white min-h-[100vh] max-w-[1500px] m-auto flex items-center justify-center`}
    >
      <div className="flex flex-1 items-center justify-center gap-2 sm:gap-3 animate-bounce">
        <div className="w-[5rem] h-[5rem] sm:w-[7rem] sm:h-[7rem]">
          <Image
            src={logo}
            width={100}
            height={100}
            alt="logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
