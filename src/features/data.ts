import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemType } from "../API/fetch";

export type DataSet = ItemType[]

const initialState: DataSet = []

export const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    init: (state, action: PayloadAction<DataSet>) => {
        return state = action.payload
    },
    add: (state, action: PayloadAction<ItemType>) => {
      return [...state, action.payload] ;
    },
  },
});

export const { add, init } = dataSlice.actions;

export default dataSlice.reducer;
