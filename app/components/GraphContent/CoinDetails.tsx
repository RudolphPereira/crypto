import React from "react";

interface Props {
  titleName?: string;
  value?: string;
  date?: string;
}

export const CoinDetails = ({ titleName, value, date }: Props) => {
  return (
    <div className="flex flex-col gap-3 flex-1">
      <p className="text-base opacity-70">{titleName}</p>

      <div className="flex flex-col gap-1">
        <p className="text-2xl font-[700]">{value}</p>
        <p className="text-xs opacity-70">{date}</p>
      </div>
    </div>
  );
};
