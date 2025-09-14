import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../utils";

type CoinList = {
  id: string | undefined;
  name: string | undefined;
  currentPrice: number | undefined;
  currency: string | undefined;
  date: string | undefined;
  noOfCoins: string | number;
};

type InitialState = {
  coinName: string;
  date: string;
  noOfCoins: number | string;
  coinList: CoinList[];
  skeletonLoader: boolean;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  coinName: "",
  date: "",
  noOfCoins: "",
  coinList: [],
  skeletonLoader: false,
  loading: true,
  error: "",
};

export const fetchPortfolioCoinList = createAsyncThunk(
  "portfolioData/fetchPortfolioCoinList",
  async (coin: string | undefined, { getState }) => {
    const state = getState() as RootState;

    const targetCoin = coin || state.portfolioData.coinName;
    const targetDate = state.portfolioData.date;
    const noOfCoins = state.portfolioData.noOfCoins;
    const currencyValue = state.currencyData.currencyValue;

    if (!targetCoin || !targetDate || !noOfCoins || !currencyValue) {
      return;
    }

    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${targetCoin}/history?date=${targetDate}&localization=false&x_cg_demo_api_key=CG-7741Ho5VUyT97d1HP9YfiiYs`,
      {
        adapter: "fetch",
        fetchOptions: { cache: "force-cache" },
      }
    );

    const data = response.data;

    const coinData = {
      id: data.id ?? "",
      name: data.name ?? "",
      currentPrice: data.market_data?.current_price?.[currencyValue] ?? 0,
      currency: currencyValue,
      date: targetDate,
      noOfCoins: noOfCoins,
    };

    const coinObj = {
      coin: targetCoin,
      data: coinData,
    };

    return coinObj;
  }
);

const portfolioDataSlice = createSlice({
  name: "portfolioCoinList",
  initialState: initialState,
  reducers: {
    updateCoinName(state, action) {
      state.coinName = action.payload;
    },

    updateDate(state, action) {
      state.date = action.payload;
    },

    updateNoOfCoins(state, action) {
      state.noOfCoins = action.payload;
    },

    removeCoin(state, action) {
      state.coinList = state.coinList.filter(
        (item) => item.id !== action.payload
      );
    },

    updateLocalData(state, action) {
      state.coinList = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPortfolioCoinList.pending, (state) => {
      state.loading = true;
      state.skeletonLoader = true;
    });

    builder.addCase(
      fetchPortfolioCoinList.fulfilled,
      (
        state,
        action: PayloadAction<
          { coin: string | undefined; data: CoinList } | undefined
        >
      ) => {
        state.loading = false;
        state.skeletonLoader = false;

        if (action.payload) {
          const isPresent = state.coinList.find(
            (coin) => coin.id === action.payload?.data.id
          );

          if (isPresent) {
            isPresent.currentPrice = action.payload.data.currentPrice;
            isPresent.currency = action.payload.data.currency;
            isPresent.date = action.payload.data.date;
            isPresent.noOfCoins = action.payload.data.noOfCoins;
          } else {
            state.coinList.push(action.payload.data);
          }
        }

        state.error = "";
      }
    );
    builder.addCase(fetchPortfolioCoinList.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const {
  updateCoinName,
  updateDate,
  updateNoOfCoins,
  removeCoin,
  updateLocalData,
} = portfolioDataSlice.actions;
export default portfolioDataSlice.reducer;
