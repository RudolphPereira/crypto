import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  toolTipTrigger: React.ReactNode;
  toolTipContent: React.ReactNode;
  align?: "left" | "top" | "bottom" | "right" | undefined;
  sideOffset?: number;
};

export function ToolTip({
  toolTipTrigger,
  toolTipContent,
  align,
  sideOffset,
}: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{toolTipTrigger}</TooltipTrigger>
      <TooltipContent
        side={align}
        sideOffset={sideOffset}
        className="[&_svg]:bg-background [&_svg]:fill-background bg-background text-foreground rounded-sm hidden sm:flex shadow-md"
      >
        <p className="text-xs">{toolTipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}
