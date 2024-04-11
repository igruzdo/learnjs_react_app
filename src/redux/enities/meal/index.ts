import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getMealsByRestaurantId } from "./thunks/get-meal-by-id.thunk";

const entityAdapter = createEntityAdapter();

export const mealSlice = createSlice({
  name: 'meal',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => builder.addCase(
    getMealsByRestaurantId.fulfilled,
    (state, { payload: meals }) => {
      entityAdapter.upsertMany(state, meals);
    }
  )
})