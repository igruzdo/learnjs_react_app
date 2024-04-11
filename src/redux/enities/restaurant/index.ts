import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getRestaurants } from "./thunks/get-restaurant.thunk";

const entityAdapter = createEntityAdapter()

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => builder.addCase(
    getRestaurants.fulfilled,
    (state, { payload: restaurants }) => {
      entityAdapter.setAll(state, restaurants);

      // state.entities = restaurants.reduce((acc: EntytySlice<RestaurantMap>, restaurant: RestaurantStoreItem) => acc.entities[restaurant.id] = restaurant, {})
      // state.ids = restaurants.map((item: RestaurantStoreItem) => item.id)
    }
  )
})