import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";

import axios from "../../utils";

type CurrencyList = [];

type InitialState = {
  currencyValue: string;
  loading: boolean;
  currencyList: CurrencyList;
  error: string;
};

const initialState: InitialState = {
  currencyValue: "usd",
  loading: true,
  currencyList: [],
  error: "",
};

export const fetchCurrencyList = createAsyncThunk(
  "currencyListData/fetchCurrencyList",
  async () => {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/simple/supported_vs_currencies?x_cg_demo_api_key=CG-7741Ho5VUyT97d1HP9YfiiYs",
      {
        adapter: "fetch",
        fetchOptions: { cache: "force-cache" },
      }
    );
    const data = response.data;

    return data;
  }
);

const currencyListSlice = createSlice({
  name: "currencyList",
  initialState: initialState,
  reducers: {
    updateCurrencyValue(state, action) {
      state.currencyValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCurrencyList.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(
      fetchCurrencyList.fulfilled,
      (state, action: PayloadAction<CurrencyList>) => {
        state.loading = false;
        state.currencyList = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchCurrencyList.rejected, (state, action) => {
      state.loading = true;
      state.currencyList = [];
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const { updateCurrencyValue } = currencyListSlice.actions;
export default currencyListSlice.reducer;
