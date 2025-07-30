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
    btc: number;
    eth: number;
  };
  totalMarketCap: {
    usd: number;
    aed: number;
    cad: number;
    eur: number;
    gbp: number;
    inr: number;
  };
  totalVolume: {
    usd: number;
    aed: number;
    cad: number;
    eur: number;
    gbp: number;
    inr: number;
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
    percentages: {
      btc: 0,
      eth: 0,
    },
    totalMarketCap: {
      usd: 0,
      aed: 0,
      cad: 0,
      eur: 0,
      gbp: 0,
      inr: 0,
    },
    totalVolume: {
      usd: 0,
      aed: 0,
      cad: 0,
      eur: 0,
      gbp: 0,
      inr: 0,
    },
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
        percentages: {
          btc: 0,
          eth: 0,
        },
        totalMarketCap: {
          usd: 0,
          aed: 0,
          cad: 0,
          eur: 0,
          gbp: 0,
          inr: 0,
        },
        totalVolume: {
          usd: 0,
          aed: 0,
          cad: 0,
          eur: 0,
          gbp: 0,
          inr: 0,
        },
      };
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export default marketDataSlice.reducer;
