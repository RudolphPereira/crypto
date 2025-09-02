import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../utils";

type GraphCoin = {
  [key: string]: number[][];
};

type Coin = {
  coinName: string;
  data: GraphCoin;
};

type InitialState = {
  dropDownCoinName: string;
  dropdownCoinOneValue: string;
  dropdownCoinTwoValue: string;
  numOfDaysData: string;
  convertorGraphCoinData: Coin;
  skeletonLoader: boolean;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  dropDownCoinName: "",
  dropdownCoinOneValue: "",
  dropdownCoinTwoValue: "",
  numOfDaysData: "1",
  convertorGraphCoinData: {
    coinName: "",
    data: {},
  },
  skeletonLoader: true,
  loading: true,
  error: "",
};

export const fetchConvertorGraphCoin = createAsyncThunk(
  "convertorGraphData/fetchConvertorGraphCoin",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    const targetCoin = state.convertorGraphData.dropDownCoinName;

    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${targetCoin}/market_chart?vs_currency=${state.currencyData.currencyValue}&days=${state.convertorGraphData.numOfDaysData}'`,
      {
        adapter: "fetch",
        fetchOptions: { cache: "force-cache" },
      }
    );

    return {
      coinName: targetCoin,
      data: response.data,
    };
  }
);

const convertorGraphDataSlice = createSlice({
  name: "convertorGraphCoinData",
  initialState: initialState,
  reducers: {
    updateConvertorNumOfDays(state, action) {
      state.numOfDaysData = action.payload;
    },

    updateDropDownCoinName(state, action) {
      state.dropDownCoinName = action.payload;
    },

    updateDropDownCoinOneValue(state, action) {
      state.dropdownCoinOneValue = action.payload;
    },

    updateDropDownCoinTwoValue(state, action) {
      state.dropdownCoinTwoValue = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchConvertorGraphCoin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchConvertorGraphCoin.fulfilled,
      (state, action: PayloadAction<{ coinName: string; data: GraphCoin }>) => {
        state.loading = false;
        state.skeletonLoader = false;
        state.convertorGraphCoinData.coinName = action.payload.coinName;
        state.convertorGraphCoinData.data = action.payload.data;
        state.error = "";
      }
    );
    builder.addCase(fetchConvertorGraphCoin.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const {
  updateDropDownCoinName,
  updateDropDownCoinOneValue,
  updateDropDownCoinTwoValue,
  updateConvertorNumOfDays,
} = convertorGraphDataSlice.actions;
export default convertorGraphDataSlice.reducer;
