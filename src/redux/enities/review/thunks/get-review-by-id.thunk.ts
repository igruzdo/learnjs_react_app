import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStore, RestaurantStoreItem } from "../../../../types/store";
import { selectReviewIds } from "../selector";
import { selectReviewIdsByRestaurantId } from "../../restaurant/selector";

export const getReviewsByRestaurantId = createAsyncThunk<RestaurantStoreItem[], string>('reviews/getReviewByRestaurantId', async (restaurantId) => {
  const response = await fetch(`http://localhost:3001/api/reviews?restaurantId=${restaurantId}`);

  return response.json();
},
  {
    condition: (restaurantId: string, { getState }) => {
      const state = getState() as AppStore;
      const restaurantReviewsIds = selectReviewIdsByRestaurantId(state, restaurantId);
      const reviewIds = selectReviewIds(state);

      return !restaurantReviewsIds.some((id) => reviewIds.includes(id));
    }
  }
)  