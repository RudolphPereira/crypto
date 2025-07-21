import React from "react";

type Props = {
  info: string;
};

export const InfoSummary = ({ info }: Props) => {
  return (
    <div className="h-[250px] overflow-scroll">
      <p className="text-sm h-full ">{info}</p>
    </div>
  );
};
