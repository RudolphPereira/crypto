import { configureStore } from "@reduxjs/toolkit";
import marketDataSlice from "./features/marketData/marketDataSlice";
import currencyListSlice from "./features/currencyListData/currencyListSlice";
import coinListSlice from "./features/coinData/coinDataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      marketData: marketDataSlice,
      currencyListData: currencyListSlice,
      coinData: coinListSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
