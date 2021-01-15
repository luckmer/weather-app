import { createSlice } from '@reduxjs/toolkit';

let initialState = {
    container:[],
};

const DataSlice = createSlice({
    name: "Data",
    initialState,
    reducers: {
        CollectData: (state, action) =>{
            const InputFormData = action.payload;
            state.container.push(InputFormData)
        }
    }   
});

export const { CollectData } = DataSlice.actions;
export default DataSlice.reducer;