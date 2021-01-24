import { createSlice } from '@reduxjs/toolkit';
import { DataSliceInterface } from "../interfaces/Index.Interface";

let initialState  : DataSliceInterface = {
    container:  "",
    DisplayData: "",
    DisplayForeCast: "",
    Filter:""
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
        },
        DataFilter: (state, action) =>{            
            const data = action.payload;
            state.Filter = data
        },
        Test: (state) =>{       
            state.container = ""
            state.DisplayData = ""
            state.DisplayForeCast = ""
            state.Filter = ""
        },
    }   
});

export const { CollectData,AddData,AddForeCast,DataFilter,Test } = DataSlice.actions;
export default DataSlice.reducer;