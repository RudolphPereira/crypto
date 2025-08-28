import { configureStore } from "@reduxjs/toolkit";
import marketDataSlice from "./features/marketData/marketDataSlice";
import currencyDataSlice from "./features/currencyData/currencyDataSlice";
import coinListSlice from "./features/coinData/coinDataSlice";
import graphDataSlice from "./features/graphData/graphDataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      marketData: marketDataSlice,
      currencyData: currencyDataSlice,
      coinData: coinListSlice,
      graphData: graphDataSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
