import { combineReducers } from '@reduxjs/toolkit'
import DataSlice from "./DataSlice";

const Reducer = combineReducers({
    Data:DataSlice,
})

export type RootState = ReturnType<typeof Reducer>