import { configureStore } from "@reduxjs/toolkit";
import marketDataSlice from "./features/marketData/marketDataSlice";
import currencyListSlice from "./features/currencyListData/currencyListSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      marketData: marketDataSlice,
      currencyListData: currencyListSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
