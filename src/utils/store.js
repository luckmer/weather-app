import { configureStore } from "@reduxjs/toolkit";
import Reducer from "../reducers/Index";

export const store = configureStore({
    reducer:Reducer
});
