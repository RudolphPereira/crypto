import React from "react";
import Image from "next/image";
import sunIcon from "../../assets/sunIcon.svg";
// import moonIcon from "../../assets/moonIcon.svg";
import { Button } from "@/components/ui/button";

export const ThemeBox = () => {
  return (
    <div className="theme h-10 w-10">
      <div className="h-10">
        <Button
          size="icon"
          className="border h-[100%] w-[100%] border-white/15 text-sm cursor-pointer bg-black-russian rounded-sm group hover:bg-periwinkle-blue/60 hover:border-b-0 hover:border-periwinkle-blue  hover:drop-shadow-periwinkle-blue/60"
        >
          <div className="w-[1.3rem] h-[1.3rem]">
            <Image
              src={sunIcon}
              alt="logo"
              className="w-full h-full transition-all ease-in duration-250 group-hover:rotate-75"
            />
          </div>
        </Button>
      </div>
    </div>
  );
};
