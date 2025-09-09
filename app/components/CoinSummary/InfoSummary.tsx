import { Button } from "@/components/ui/button";
import React, { useState } from "react";

type Props = {
  info: string;
};

export const InfoSummary = ({ info }: Props) => {
  const [readMore, setReadMore] = useState<boolean>(false);

  return (
    <div className="text-background">
      <p className="text-sm">
        <span
          className={`${
            readMore ? "line-clamp-none" : "line-clamp-3"
          } block overflow-hidden`}
        >
          {info}
        </span>
        {info.length > 350 && (
          <Button
            onClick={() => setReadMore(!readMore)}
            className="bg-transparent w-fit h-fit hover:bg-transparent p-0 m-0 text-periwinkle-blue/80 hover:text-periwinkle-blue cursor-pointer shadow-none"
          >
            {readMore ? "...read less" : "...read more"}
          </Button>
        )}
      </p>
    </div>
  );
};
