import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-1.webp",
      status: "exists",
    },
    {
      id: 2,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-2.webp",
      status: "exists",
    },
    {
      id: 3,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-3.webp",
      status: "exists",
    },
    {
      id: 4,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-4.webp",
      status: "exists",
    },
    {
      id: 5,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-5.webp",
      status: "exists",
    },
    {
      id: 6,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-6.webp",
      status: "exists",
    },
    {
      id: 7,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-7.webp",
      status: "exists",
    },
    {
      id: 8,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-8.webp",
      status: "exists",
    },
    {
      id: 9,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-9.webp",
      status: "exists",
    },
    {
      id: 10,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-10.jpeg",
      status: "exists",
    },
    {
      id: 11,
      image:
        "https://raw.githubusercontent.com/mahdimortuza/image-gallery/main/src/assets/images/image-11.jpeg",
      status: "exists",
    },
  ],
};

export const counterSlice = createSlice({
  name: "imagesSlice",
  initialState,
  reducers: {

    // reducer for updating status on initial state 

    updateStatus: (state, { payload }) => {
      const target = state.items.find((item) => item.id === payload.id);
      target.status = payload.status;
    },


    // reducer for deleting items from the ui 

    removeImage: (state, { payload }) => {
      state.items = state.items.filter((item) => item.id !== payload);
    },
  },
});

export const { removeImage, updateStatus } = counterSlice.actions;

export default counterSlice.reducer;
