import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "imagesSlice",
  initialState,
  reducers: {
    deleteImage: (state, { payload }) => {
      state.images.push(payload);
    },
  },
});

export const { deleteImage } = imagesSlice.actions;

export default imagesSlice.reducer;
