import { Button } from "@/components/ui/button";
import { MouseEventHandler } from "react";

type Props = {
  btnIcon?: React.ReactNode;
  btnTitle?: string;
  additionalClass?: string;
  handleOnCLick?: MouseEventHandler<HTMLButtonElement> | undefined;

  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
};

export const ActionBtn = ({
  btnIcon,
  btnTitle,
  additionalClass,
  disabled,
  type,
  handleOnCLick,
}: Props) => {
  return (
    <Button
      type={type}
      disabled={disabled}
      onClick={handleOnCLick}
      className={`bg-dark-gunmetal light:hover:drop-shadow-md rounded-sm font-[400] cursor-pointer border border-transparent border-b-0 hover:border-b-0 hover:border-periwinkle-blue hover:bg-periwinkle-blue/60 [&.active]:border-periwinkle-blue [&.active]:bg-periwinkle-blue/60 [&.active]:drop-shadow-periwinkle-blue/60 hover:drop-shadow-periwinkle-blue/60 transition-all ease-in text-background h-10 disabled:bg-opacity-40 [&.active]:disabled:bg-opacity-40  ${additionalClass}`}
    >
      {btnIcon && btnIcon}
      {btnTitle}
    </Button>
  );
};
