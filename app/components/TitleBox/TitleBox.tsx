import { Button } from "@/components/ui/button";
import { ChartNoAxesColumn } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  btnTitle?: string;
  actionBtn?: boolean;
  actionBtnSecondary?: boolean;
};

export const TitleBox = ({
  title,
  subtitle,
  btnTitle,
  actionBtn,
  actionBtnSecondary,
}: Props) => {
  return (
    <div className="flex flex-col gap-3 sm:flex-row justify-between sm:items-end">
      <div className=" flex flex-col gap-0.5">
        {title && (
          <h2 className="text-background font-[500] text-lg">{title}</h2>
        )}
        {subtitle && <p className="text-sm text-background/70">{subtitle}</p>}
      </div>
      {actionBtn && (
        <Button className="bg-dark-gunmetal rounded-sm font-[400] cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background h-10">
          <ChartNoAxesColumn />
          {btnTitle}
        </Button>
      )}
      {actionBtnSecondary && (
        <Button className="bg-dark-gunmetal rounded-sm font-[400] cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background h-10">
          {btnTitle}
        </Button>
      )}
    </div>
  );
};
