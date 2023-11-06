import { configureStore } from "@reduxjs/toolkit";
import imagesSlice from "./features/images/imagesSlice";
const store = configureStore({
  reducer: {
    imagesSlice: imagesSlice,
  },
});

export default store;
