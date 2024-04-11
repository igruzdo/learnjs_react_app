import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStore, RestaurantStoreItem } from "../../../../types/store";
import { selectMealIds } from "../selector";
import { selectMealIdsByRestaurantId } from "../../restaurant/selector";

export const getMealsByRestaurantId = createAsyncThunk<RestaurantStoreItem[], string>('meals/getMealByRestaurantId', async (restaurantId) => {
  const response = await fetch(`http://localhost:3001/api/dishes?restaurantId=${restaurantId}`);

  return response.json();
},
  {
    condition: (restaurantId: string, { getState }) => {
      const state = getState() as AppStore;
      const restaurantMealsIds = selectMealIdsByRestaurantId(state, restaurantId);
      const mealIds = selectMealIds(state);

      return !restaurantMealsIds.some((id) => mealIds.includes(id));
    }
  }
)  