import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../utils";

type CoinList = [
  {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: string;
    market_cap: string;
    total_volume: string;
    price_change_percentage_24h: string;
    market_cap_change_24h: string;
    market_cap_change_percentage_24h: string;
    circulating_supply: string;
    total_supply: string;
    sparkline_in_7d: {
      price: number[];
    };
    price_change_percentage_1h_in_currency: string;
    price_change_percentage_24h_in_currency: string;
    price_change_percentage_7d_in_currency: string;
  }
];

type InitialState = {
  coinName: string;
  skeletonLoader: boolean;
  loading: boolean;
  coinList: CoinList;
  error: string;
};

const initialState: InitialState = {
  coinName: "",
  skeletonLoader: true,
  loading: true,
  coinList: [
    {
      id: "",
      symbol: "",
      name: "",
      image: "",
      current_price: "",
      market_cap: "",
      total_volume: "",
      price_change_percentage_24h: "",
      market_cap_change_24h: "",
      market_cap_change_percentage_24h: "",
      circulating_supply: "",
      total_supply: "",
      sparkline_in_7d: {
        price: [],
      },
      price_change_percentage_1h_in_currency: "",
      price_change_percentage_24h_in_currency: "",
      price_change_percentage_7d_in_currency: "",
    },
  ],
  error: "",
};

export const fetchCoinList = createAsyncThunk(
  "coinData/fetchCoinList",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.currencyData.currencyValue}&sparkline=true&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y&x_cg_demo_api_key=CG-7741Ho5VUyT97d1HP9YfiiYs`,
      {
        adapter: "fetch",
        fetchOptions: { cache: "force-cache" },
      }
    );
    const data = response.data;

    return data;
  }
);

const coinDataSlice = createSlice({
  name: "coinList",
  initialState: initialState,
  reducers: {
    updateCoinName(state, action) {
      state.coinName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCoinList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCoinList.fulfilled,
      (state, action: PayloadAction<CoinList>) => {
        state.loading = false;
        state.skeletonLoader = false;
        state.coinList = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchCoinList.rejected, (state, action) => {
      state.loading = true;
      state.skeletonLoader = true;
      state.coinList = [
        {
          id: "",
          symbol: "",
          name: "",
          image: "",
          current_price: "",
          market_cap: "",
          total_volume: "",
          price_change_percentage_24h: "",
          market_cap_change_24h: "",
          market_cap_change_percentage_24h: "",
          circulating_supply: "",
          total_supply: "",
          sparkline_in_7d: {
            price: [],
          },
          price_change_percentage_1h_in_currency: "",
          price_change_percentage_24h_in_currency: "",
          price_change_percentage_7d_in_currency: "",
        },
      ];
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const { updateCoinName } = coinDataSlice.actions;
export default coinDataSlice.reducer;
