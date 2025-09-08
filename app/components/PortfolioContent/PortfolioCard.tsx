import React from "react";
type Props = {
  coinDetails: React.ReactNode;
  portfolioStats: React.ReactNode;
  removeBtn?: React.ReactNode;
};

export const PortfolioCard = ({
  coinDetails,
  portfolioStats,
  removeBtn,
}: Props) => {
  return (
    <div className="bg-black-russian flex lg:flex-row flex-col w-full rounded-lg">
      <div className="bg-dark-blue  light:bg-periwinkle-blue/20 p-3 md:p-6 rounded-t-lg lg:rounded-tr-none lg:rounded-l-lg flex-1 flex flex-col gap-3">
        {coinDetails}
        <div className="flex gap-2 items-center flex-wrap">{removeBtn}</div>
      </div>
      <div className="flex-1/2 p-3 md:p-6 sm:rounded-r-lg grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
        {portfolioStats}
      </div>
    </div>
  );
};
