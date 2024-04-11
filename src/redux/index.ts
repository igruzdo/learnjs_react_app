import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./enities/restaurant";
import { mealSlice } from "./enities/meal";
import { reviewSlice } from "./enities/review";
import { userSlice } from "./enities/user";
import { cartSlice } from "./ui/cart";

export const store = configureStore({
  reducer: combineSlices(
    restaurantSlice,
    mealSlice,
    reviewSlice,
    userSlice,
    cartSlice
  ),
  middleware: (getDefaultMiddlevare) => getDefaultMiddlevare(),
})