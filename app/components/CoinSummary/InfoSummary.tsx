import React from "react";

type Props = {
  info: string;
};

export const InfoSummary = ({ info }: Props) => {
  return (
    <div className="text-background">
      <p className="text-sm h-full">{info}</p>
    </div>
  );
};
