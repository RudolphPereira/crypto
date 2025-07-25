"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import moonIcon from "../../assets/moonIcon.svg";
import sunIcon from "../../assets/sunIcon.svg";

export const ThemeBox = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="h-10 w-10">
      <div className="h-10">
        <Button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          size="icon"
          className="border h-[100%] w-[100%] border-white/15 text-sm cursor-pointer bg-black-russian rounded-sm group hover:bg-periwinkle-blue/60 hover:border-b-0 hover:border-periwinkle-blue hover:drop-shadow-periwinkle-blue/60"
        >
          <div className="w-[1.3rem] h-[1.3rem] flex items-center justify-center">
            <Image
              src={theme === "light" ? moonIcon : sunIcon}
              alt="logo"
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
