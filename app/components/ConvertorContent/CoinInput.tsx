import { Input } from "@/components/ui/input";
import { ChangeEventHandler } from "react";

type Props = {
  inputReadOnly?: boolean;
  handleInputChange?: ChangeEventHandler<HTMLInputElement>;
  inputValue?: string;
};

export const CoinInput = ({
  inputReadOnly,
  handleInputChange,
  inputValue,
}: Props) => {
  return (
    <div className="">
      <Input
        onChange={handleInputChange}
        type="number"
        inputMode="numeric"
        placeholder="0"
        value={inputValue}
        readOnly={inputReadOnly ? true : false}
        className="light:bg-white dark:bg-transparent w-full border-0 outline-none focus-visible:ring-0 p-0 text-right shadow-none text-3xl  md:text-2xl font-[700] [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
      />
    </div>
  );
};
