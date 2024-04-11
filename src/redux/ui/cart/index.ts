import { SliceCaseReducers, SliceSelectors, createSlice } from "@reduxjs/toolkit";
import { CartStoreSlice } from "../../../types/store";

export const cartSlice = createSlice<CartStoreSlice, SliceCaseReducers<CartStoreSlice>, string, SliceSelectors<CartStoreSlice>>({
  name: 'cart',
  initialState: {},
  reducers: {
    addProduct: (state, { payload: id }: { payload: string }) => {
      const count = state[id] || 0;
      state[id] = count + 1;
    },
    deleteProduct: (state, { payload: id }) => {
      const count = state[id];
      if (!count) {
        return state;
      }
      if (count === 1) {
        delete state[id]
      }
      state[id] = count - 1;
    }
  }
})

export const { addProduct, deleteProduct } = cartSlice.actions 