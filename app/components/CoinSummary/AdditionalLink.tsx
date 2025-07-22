import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  linkUrl: string;
};

export const AdditionalLink = ({ linkUrl }: Props) => {
  return (
    <div className="hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background flex border border-transparent border-b-0 items-center gap-2 h-10 px-4 py-6 rounded-lg bg-deep-plum light:bg-periwinkle-blue/20 justify-center w-full sm:justify-start sm:w-fit">
      <a
        href={`https://${linkUrl}`}
        target="_blank"
        rel={"noreferrer"}
        className="text-sm"
      >
        {linkUrl}
      </a>
      <Button className="bg-transparent cursor-pointer p-0 has-[>svg]:px-0 h-auto mt-1 hover:bg-transparent text-background">
        <Copy />
      </Button>
    </div>
  );
};
