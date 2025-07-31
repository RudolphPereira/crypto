import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
  toolTipTrigger: React.ReactNode;
  toolTipContent: React.ReactNode;
};

export function ToolTip({ toolTipTrigger, toolTipContent }: Props) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>{toolTipTrigger}</TooltipTrigger>
      <TooltipContent className="[&_svg]:bg-background [&_svg]:fill-background bg-background text-foreground rounded-sm hidden sm:flex shadow-md">
        <p>{toolTipContent}</p>
      </TooltipContent>
    </Tooltip>
  );
}
