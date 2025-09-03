import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../utils";

type Coin = {
  id: string;
  symbol: string;
  name: string;
  image: string;
  homePageLink: string[];
  currentPrice: number;
  priceChangePercentage24Hour: number;
  allTimeHigh: number;
  allTimeHighDate: string;
  allTimeLow: number;
  allTimeLowDate: string;
  description: string;
  additionalLinks: string[];
  totalVolume: number;
  totalSupply: number;
  marketCap: number;
  fullyDilutedValuation: number;
  maxSupply: number;
  circulatingSupply: number;
};

type InitialState = {
  coinName: string;
  skeletonLoader: boolean;
  loading: boolean;
  coin: Coin;
  error: string;
};

const initialState: InitialState = {
  coinName: "",
  skeletonLoader: true,
  loading: true,
  coin: {
    id: "",
    symbol: "",
    name: "",
    image: "",
    homePageLink: [],
    currentPrice: 0,
    priceChangePercentage24Hour: 0,
    allTimeHigh: 0,
    allTimeHighDate: "",
    allTimeLow: 0,
    allTimeLowDate: "",
    description: "",
    additionalLinks: [],
    totalVolume: 0,
    totalSupply: 0,
    marketCap: 0,
    fullyDilutedValuation: 0,
    maxSupply: 0,
    circulatingSupply: 0,
  },
  error: "",
};

export const fetchCoin = createAsyncThunk(
  "coinPageData/fetchCoin",
  async (coinId: string, { getState }) => {
    const state = getState() as RootState;
    const targetCoin = coinId;
    if (!targetCoin) {
      return;
    }
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${targetCoin}?localization=false&tickers=false&x_cg_demo_api_key=CG-7741Ho5VUyT97d1HP9YfiiYs`,

      {
        adapter: "fetch",
        fetchOptions: { cache: "force-cache" },
      }
    );
    const data = response.data;

    const coinData = {
      id: data.id,
      symbol: data.symbol,
      name: data.name,
      image: data.image.large,
      homePageLink: data.links.homepage,
      currentPrice:
        data.market_data.current_price?.[state.currencyData.currencyValue],
      priceChangePercentage24Hour:
        data.market_data.price_change_percentage_24h_in_currency?.[
          state.currencyData.currencyValue
        ],
      allTimeHigh: data.market_data.ath?.[state.currencyData.currencyValue],
      allTimeHighDate:
        data.market_data.ath_date?.[state.currencyData.currencyValue],
      allTimeLow: data.market_data.atl?.[state.currencyData.currencyValue],
      allTimeLowDate:
        data.market_data.atl_date?.[state.currencyData.currencyValue],
      description: data.description.en,
      additionalLinks: data.links.blockchain_site,
      totalVolume:
        data.market_data.total_volume?.[state.currencyData.currencyValue],
      totalSupply: data.market_data.total_supply,
      marketCap:
        data.market_data.market_cap?.[state.currencyData.currencyValue],
      fullyDilutedValuation:
        data.market_data.fully_diluted_valuation?.[
          state.currencyData.currencyValue
        ],
      maxSupply: data.market_data.max_supply || 0,
      circulatingSupply: data.market_data.circulating_supply,
    };

    return coinData;
  }
);

const coinPageDataSlice = createSlice({
  name: "coinPageData",
  initialState: initialState,
  reducers: {
    updateCoinName(state, action) {
      state.coinName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoin.pending, (state) => {
      state.skeletonLoader = true;
      state.loading = true;
    });
    builder.addCase(
      fetchCoin.fulfilled,
      (state, action: PayloadAction<Coin | undefined>) => {
        state.skeletonLoader = false;
        state.loading = false;
        if (action.payload) {
          state.coin = action.payload;
          state.error = "";
        }
      }
    );
    builder.addCase(fetchCoin.rejected, (state, action) => {
      state.skeletonLoader = true;
      state.loading = true;
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const { updateCoinName } = coinPageDataSlice.actions;
export default coinPageDataSlice.reducer;
