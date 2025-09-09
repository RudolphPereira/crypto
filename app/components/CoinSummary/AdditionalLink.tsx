import React from "react";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ToolTip } from "../ToolTip/ToolTip";

type Props = {
  linkUrl: string;
  handleCopyLink: () => void | Promise<void>;
};

export const AdditionalLink = ({ linkUrl, handleCopyLink }: Props) => {
  return (
    <div className="hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 light:hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background flex border border-transparent border-b-0 items-center gap-2 h-10 px-4 py-6 rounded-lg bg-deep-plum light:bg-periwinkle-blue/20 justify-center w-full sm:justify-start sm:w-fit">
      <ToolTip
        toolTipTrigger={
          <a
            href={`${linkUrl}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm justify-center text-center flex max-w-[250px] items-center gap-1"
          >
            <ExternalLink className="w-4 h-4 flex-shrink-0" />
            <span className="truncate">{linkUrl}</span>
          </a>
        }
        toolTipContent="Visit external link"
        align="bottom"
      />

      <ToolTip
        toolTipTrigger={
          <Button
            onClick={handleCopyLink}
            className="bg-transparent cursor-pointer p-0 has-[>svg]:px-0 h-auto mt-1 hover:bg-transparent text-background"
          >
            <Copy />
          </Button>
        }
        toolTipContent="Copy link to clipboard"
        align="bottom"
      />
    </div>
  );
};
