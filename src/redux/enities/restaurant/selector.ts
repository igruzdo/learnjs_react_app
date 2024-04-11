import { EntytySlice, RestaurantMap, RestaurantStoreItem, AppStore } from "../../../types/store";

export const selectRestaurantModule = (state: AppStore): EntytySlice<RestaurantMap> => state.restaurant;
export const selectRestaurantIds = (state: AppStore): string[] => selectRestaurantModule(state).ids;
export const selectRestaurantById = (state: AppStore, id: string): RestaurantStoreItem => selectRestaurantModule(state).entities[id]
export const selectReviewIdsByRestaurantId = (state: AppStore, id: string): string[] => selectRestaurantModule(state).entities[id].reviews;
export const selectMealIdsByRestaurantId = (state: AppStore, id: string): string[] => selectRestaurantModule(state).entities[id].menu;