import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    container: "",
    DisplayData: "",
};

const DataSlice = createSlice({
    name: "Data",
    initialState,
    reducers: {
        CollectData: (state, action) =>{
            const InputFormData = action.payload;
            state.container = InputFormData
        },
        AddData: (state, action) =>{
            const contextData = action.payload;
            state.DisplayData = contextData
        },
    }   
});

export const { CollectData,AddData } = DataSlice.actions;
export default DataSlice.reducer;