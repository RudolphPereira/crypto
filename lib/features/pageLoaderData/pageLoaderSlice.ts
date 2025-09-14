import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
  pageLoader: boolean;
};

const initialState: InitialState = {
  pageLoader: true,
};

const pageLoaderSlice = createSlice({
  name: "pageLoaderData",
  initialState: initialState,
  reducers: {
    updatePageLoader(state, action) {
      state.pageLoader = action.payload;
    },
  },
});
export const { updatePageLoader } = pageLoaderSlice.actions;
export default pageLoaderSlice.reducer;
