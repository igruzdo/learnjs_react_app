import { AppStore, CartStoreSlice } from "../../../types/store";

export const selectCartModule = (state: AppStore): CartStoreSlice => state.cart;
export const selectCartIds = (state: AppStore) => Object.keys(selectCartModule(state));
export const selectProductAmountById = (state: AppStore, id: string): number => selectCartModule(state)[id] || 0; 