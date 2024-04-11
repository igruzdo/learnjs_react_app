import { MealInterface } from "../../../types/meal.models";
import { EntytySlice, MealMap, AppStore } from "../../../types/store";

export const selectMealModule = (state: AppStore): EntytySlice<MealMap> => state.meal;
export const selectMealIds = (state: AppStore): string[] => selectMealModule(state).ids;
export const selectMealById = (state: AppStore, id: string): MealInterface => selectMealModule(state).entities[id] 