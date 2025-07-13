import { Button } from "@/components/ui/button";
import React from "react";

export const ChartTimeline = () => {
  return (
    <div className="chartTimeline mb-10">
      <div className="bg-dark-gunmetal p-1 flex gap-2 w-fit rounded-sm">
        <Button className="cursor-pointer font-[500] border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-white  duration-200 rounded-sm w-[3.5rem] h-[1.8rem] text-xs bg-dark-gunmetal ">
          1D
        </Button>
        <Button className="cursor-pointer font-[500]   border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-white  duration-200 rounded-sm w-[3.5rem] h-[1.8rem] text-xs bg-dark-gunmetal ">
          7D
        </Button>
        <Button className="cursor-pointer font-[500]   border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-white  duration-200 rounded-sm w-[3.5rem] h-[1.8rem] text-xs bg-dark-gunmetal ">
          14D
        </Button>
        <Button className="cursor-pointer font-[500]   border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-white  duration-200 rounded-sm w-[3.5rem] h-[1.8rem] text-xs bg-dark-gunmetal ">
          1M
        </Button>
        <Button className="cursor-pointer font-[500]   border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-white  duration-200 rounded-sm w-[3.5rem] h-[1.8rem] text-xs bg-dark-gunmetal ">
          1Y
        </Button>
      </div>
    </div>
  );
};
