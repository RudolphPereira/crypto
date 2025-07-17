import { CoinData, columns } from "./columns";
import { DataTable } from "./data-table";
import bitcoinIcon from "../assets/Currency-icon-02.svg";

async function getData(): Promise<CoinData[]> {
  return [
    {
      id: "1",
      number: 1,
      image: bitcoinIcon,
      name: "Bitcoin (BTC)",
      price: "$29,850",
      oneHourPercentage: "34",
      twentyFourHourPercentage: "35",
      sevenDayPercentage: "12",
      twentyFourHourVolumeByMarketCap: {
        twentyFourHourVolume: "$3.75B",
        marketCap: "$8.24B",
      },
      circulatingByTotalSupply: {
        circulation: "$3.75B",
        totalSupply: "$8.24B",
      },
      lastSevenDay: "67",
    },

    {
      id: "1",
      number: 1,
      image: bitcoinIcon,
      name: "Bitcoin (BTC)",
      price: "$29,850",
      oneHourPercentage: "34",
      twentyFourHourPercentage: "35",
      sevenDayPercentage: "12",
      twentyFourHourVolumeByMarketCap: {
        twentyFourHourVolume: "$3.75B",
        marketCap: "$8.24B",
      },
      circulatingByTotalSupply: {
        circulation: "$3.75B",
        totalSupply: "$8.24B",
      },
      lastSevenDay: "67",
    },

    {
      id: "1",
      number: 1,
      image: bitcoinIcon,
      name: "Bitcoin (BTC)",
      price: "$29,850",
      oneHourPercentage: "34",
      twentyFourHourPercentage: "35",
      sevenDayPercentage: "12",
      twentyFourHourVolumeByMarketCap: {
        twentyFourHourVolume: "$3.75B",
        marketCap: "$8.24B",
      },
      circulatingByTotalSupply: {
        circulation: "$3.75B",
        totalSupply: "$8.24B",
      },
      lastSevenDay: "67",
    },

    {
      id: "1",
      number: 1,
      image: bitcoinIcon,
      name: "Bitcoin (BTC)",
      price: "$29,850",
      oneHourPercentage: "34",
      twentyFourHourPercentage: "35",
      sevenDayPercentage: "12",
      twentyFourHourVolumeByMarketCap: {
        twentyFourHourVolume: "$3.75B",
        marketCap: "$8.24B",
      },
      circulatingByTotalSupply: {
        circulation: "$3.75B",
        totalSupply: "$8.24B",
      },
      lastSevenDay: "67",
    },

    {
      id: "1",
      number: 1,
      image: bitcoinIcon,
      name: "Bitcoin (BTC)",
      price: "$29,850",
      oneHourPercentage: "34",
      twentyFourHourPercentage: "35",
      sevenDayPercentage: "12",
      twentyFourHourVolumeByMarketCap: {
        twentyFourHourVolume: "$3.75B",
        marketCap: "$8.24B",
      },
      circulatingByTotalSupply: {
        circulation: "$3.75B",
        totalSupply: "$8.24B",
      },
      lastSevenDay: "67",
    },
  ];
}

export default async function CoinTable() {
  const data = await getData();

  return (
    <div>
      <DataTable columns={columns} data={data} />
    </div>
  );
}
