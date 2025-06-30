import React from "react";
import Image from "next/image";
import sunIcon from "../../assets/sunIcon.svg";
// import moonIcon from "../../assets/moonIcon.svg";
import { Button } from "@/components/ui/button";

export const ThemeBox = () => {
  return (
    <div className="theme h-10 w-10">
      <div className="themeBtn border rounded-sm h-[100%] border-white/15 text-sm bg-black-russian">
        <Button
          size="icon"
          className="h-[100%] w-[100%] cursor-pointer bg-black-russian rounded-sm hover:bg-black-russian group"
        >
          <div className="imgBox w-[1.3rem] h-[1.3rem]">
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
