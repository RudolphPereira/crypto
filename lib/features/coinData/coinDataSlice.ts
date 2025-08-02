import {
  createSlice,
  createAsyncThunk,
  type PayloadAction,
} from "@reduxjs/toolkit";
import { RootState } from "../../store";
import axios from "../../utils";

type CoinList = [
  {
    [key: string]: string | number | boolean;
  }
];

type InitialState = {
  coinName: string | undefined;
  loading: boolean;
  coinList: CoinList;
  error: string;
};

const initialState: InitialState = {
  coinName: "",
  loading: true,
  coinList: [{}],
  error: "",
};

export const fetchCoinList = createAsyncThunk(
  "coinData/fetchCoinList",
  async (arg, { getState }) => {
    const state = getState() as RootState;
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${state.currencyData.currencyValue}&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d%2C%2014d%2C%2030d%2C%20200d%2C%201y&x_cg_demo_api_key=CG-7741Ho5VUyT97d1HP9YfiiYs`,
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
        state.coinList = action.payload;
        state.error = "";
      }
    );
    builder.addCase(fetchCoinList.rejected, (state, action) => {
      state.loading = true;
      state.coinList = [{}];
      state.error = action.error.message || "Something went wrong here";
    });
  },
});

export const { updateCoinName } = coinDataSlice.actions;
export default coinDataSlice.reducer;
