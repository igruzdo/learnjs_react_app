import { MealInterface } from "./meal.models";
import { ReviewInterface } from "./review.models";

export interface RestaurantInterface {
  id: string,
  name: string,
  menu: MealInterface[],
  reviews: ReviewInterface[],
}


