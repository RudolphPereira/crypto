import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../utils";

type GraphCoinList = {
  [key: string]: number[][];
};

type CompareList = {
  coinName: string;
  data: GraphCoinList;
  isActive: boolean;
};

type InitialState = {
  sliderCoinName: string;
  numOfDaysData: string;
  graphCoinList: CompareList[];
  compareStatus: boolean;
  skeletonLoader: boolean;
  loading: boolean;
  error: string;
};

const initialState: InitialState = {
  sliderCoinName: "bitcoin",
  numOfDaysData: "1",
  graphCoinList: [],
  compareStatus: false,
  skeletonLoader: true,
  loading: true,
  error: "",
};

export const fetchGraphCoinList = createAsyncThunk(
  "graphData/fetchGraphCoinList",
  async (coinName: string | undefined, { getState }) => {
    const state = getState() as RootState;
    const targetCoin = coinName || state.graphData.sliderCoinName;

    const headers = new Headers();
    headers.set("Access-Control-Allow-Origin", "*");

    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${targetCoin}/market_chart?vs_currency=${state.currencyData.currencyValue}&days=${state.graphData.numOfDaysData}'`,
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

const graphDataSlice = createSlice({
  name: "graphCoinList",
  initialState: initialState,
  reducers: {
    updateSliderCoinName(state, action) {
      state.sliderCoinName = action.payload;
    },

    updateNumOfDays(state, action) {
      state.numOfDaysData = action.payload;
    },

    updateCompareStatus(state, action) {
      state.compareStatus = action.payload;
    },

    updateGraphCoinCompareList(state, action) {
      const isPresent = state.graphCoinList.some(
        (item) => item.coinName === state.sliderCoinName
      );

      if (isPresent && state.compareStatus) {
        state.graphCoinList = state.graphCoinList.filter(
          (item) => item.coinName !== state.sliderCoinName
        );
      } else if (state.graphCoinList.length >= 3) {
        state.graphCoinList = [...state.graphCoinList.slice(1), action.payload];
      } else {
        state.graphCoinList.push(action.payload);
      }
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchGraphCoinList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchGraphCoinList.fulfilled,
      (
        state,
        action: PayloadAction<{ coinName: string; data: GraphCoinList }>
      ) => {
        state.loading = false;
        state.skeletonLoader = false;

        if (!state.compareStatus) {
          state.graphCoinList.splice(0, 3, {
            coinName: state.sliderCoinName,
            data: action.payload.data,
            isActive: true,
          });
        } else {
          const selectedCoin = state.graphCoinList.find(
            (item) => item.coinName === action.payload.coinName
          );

          if (selectedCoin) {
            selectedCoin.data = action.payload.data;
            selectedCoin.isActive = true;
          }

          state.graphCoinList.forEach((item) => {
            item.isActive = true;
          });
        }

        state.error = "";
      }
    );
    builder.addCase(fetchGraphCoinList.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const {
  updateSliderCoinName,
  updateNumOfDays,
  updateCompareStatus,
  updateGraphCoinCompareList,
} = graphDataSlice.actions;
export default graphDataSlice.reducer;
