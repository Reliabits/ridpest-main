import {toastFunc} from "../utils/toastMiddleWare";
import {configureStore} from "@reduxjs/toolkit";
import LoaderSlice from "./slices/loader/loader";

export const store = configureStore({
  reducer: {
    loader: LoaderSlice,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(toastFunc);
  },
});
