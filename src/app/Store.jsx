import { configureStore } from "@reduxjs/toolkit";
import picturesSlice from "../features/pictures.slice";

export default configureStore({
  reducer: {
    pictures: picturesSlice,
  },
});
