import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    container: "",
    DisplayData: "",
    DisplayForeCast:""
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
        AddForeCast: (state, action) =>{            
            const data = action.payload;
            state.DisplayForeCast = data
        }
    }   
});

export const { CollectData,AddData,AddForeCast } = DataSlice.actions;
export default DataSlice.reducer;