"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import moonIcon from "../../assets/moonIcon.svg";
import sunIcon from "../../assets/sunIcon.svg";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

export const ThemeBox = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme && savedTheme !== theme) {
      setTheme(savedTheme);
    }
  }, [theme, setTheme]);

  const handleTheme = () => {
    const appTheme = theme === "dark" ? "light" : "dark";
    setTheme(appTheme);
    localStorage.setItem("theme", appTheme);
  };

  if (!mounted) {
    return (
      <Button
        size="icon"
        className="dark:border h-10 w-10 light:bg-periwinkle-blue/40 dark:border-white/15 text-sm cursor-pointer bg-black-russian rounded-sm"
      >
        <Skeleton className="w-5.5 h-5.5 rounded-sm" />
      </Button>
    );
  }

  return (
    <div className="h-10 w-10">
      <div className="h-10">
        <Button
          aria-labelledby={
            theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
          }
          onClick={handleTheme}
          size="icon"
          className="border h-[100%] w-[100%] border-white/15 text-sm cursor-pointer bg-black-russian rounded-sm group hover:bg-periwinkle-blue/60 hover:border-b-0 hover:border-periwinkle-blue hover:drop-shadow-periwinkle-blue/60"
        >
          <div className="w-[1.3rem] h-[1.3rem] flex items-center justify-center">
            <Image
              src={theme === "light" ? moonIcon : sunIcon}
              alt="logo"
              width={24}
              height={24}
              className={`w-full h-full transition-all ease-in duration-250 ${
                theme === "light"
                  ? "group-hover:-rotate-20"
                  : "group-hover:rotate-75"
              }`}
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
