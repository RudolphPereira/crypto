import { Button } from "@/components/ui/button";
import { ArrowUpDown } from "lucide-react";

type BtnProps = {
  btnName: string;
  // eslint-disable-next-line
  column?: any;
  disabled: boolean;
  icon?: string;
};

export const HeaderBtn = ({ btnName, column, disabled, icon }: BtnProps) => {
  return (
    <Button
      disabled={disabled}
      className="group w-full justify-between hover:text-background cursor-pointer bg-transparent font-[400] border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background/70 duration-200 rounded-sm h-[1.8rem] disabled:opacity-100"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {btnName}
      {icon && (
        <ArrowUpDown className="size-3.5 opacity-0 group-hover:opacity-100" />
      )}
    </Button>
  );
};
