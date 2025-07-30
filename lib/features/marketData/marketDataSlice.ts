import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import axios from "axios";

type marketData = {
  coins: number;
  markets: number;
  percentages: {
    [key: string]: number;
  };
  totalMarketCap: {
    [key: string]: number;
  };
  totalVolume: {
    [key: string]: number;
  };
};

type InitialState = {
  loading: boolean;
  marketData: marketData;
  error: string;
};

const initialState: InitialState = {
  loading: false,
  marketData: {
    coins: 0,
    markets: 0,
    percentages: {},
    totalMarketCap: {},
    totalVolume: {},
  },
  error: "",
};

export const fetchMarketData = createAsyncThunk(
  "marketData/fetchMarketData",
  async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/global?x_cg_demo_api_key=CG-7741Ho5VUyT97d1HP9YfiiYs"
    );

    const data = response.data.data;

    const marketData = {
      coins: data.active_cryptocurrencies,
      markets: data.markets,
      percentages: data.market_cap_percentage,
      totalMarketCap: data.total_market_cap,
      totalVolume: data.total_volume,
    };

    return marketData;
  }
);

const marketDataSlice = createSlice({
  name: "marketData",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMarketData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchMarketData.fulfilled,
      (state, action: PayloadAction<marketData>) => {
        state.loading = false;
        state.marketData = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchMarketData.rejected, (state, action) => {
      state.loading = false;
      state.marketData = {
        coins: 0,
        markets: 0,
        percentages: {},
        totalMarketCap: {},
        totalVolume: {},
      };
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export default marketDataSlice.reducer;
