import { configureStore } from "@reduxjs/toolkit";
import marketDataSlice from "./features/marketData/marketDataSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      marketData: marketDataSlice,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
