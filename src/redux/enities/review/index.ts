import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getReviewsByRestaurantId } from "./thunks/get-review-by-id.thunk";

const entityAdapter = createEntityAdapter()

export const reviewSlice = createSlice({
  name: 'review',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => builder.addCase(
    getReviewsByRestaurantId.fulfilled,
    (state, { payload: reviews }) => {
      entityAdapter.upsertMany(state, reviews);
    }
  )
}) 