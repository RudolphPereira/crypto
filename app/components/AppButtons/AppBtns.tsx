import { Button } from "@/components/ui/button";

type Props = {
  btnIcon?: React.ReactNode;
  btnTitle?: string;
  additionalClass?: string;
};

export const ActionBtn = ({ btnIcon, btnTitle, additionalClass }: Props) => {
  return (
    <Button
      className={`bg-dark-gunmetal light:hover:drop-shadow-md rounded-sm font-[400] cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background h-10 ${additionalClass}`}
    >
      {btnIcon && btnIcon}
      {btnTitle}
    </Button>
  );
};
