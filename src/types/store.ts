import { MealInterface } from "./meal.models"
import { ReviewInterface } from "./review.models"

export interface RestaurantMap {
  [key: string]: {
    id: string,
    name: string,
    menu: string[],
    reviews: string[],
  }
}

export interface MealMap {
  [key: string]: MealInterface
}

export interface ReviewMap {
  [key: string]: ReviewInterface
}

export interface UserMap {
  [key: string]: {
    id: string,
    name: string,
  }
}

export interface EntytySlice<EntityType> {
  entities: EntityType,
  ids: string[],
}

export interface StoreSlices {
  restaurant: EntytySlice<RestaurantMap>,
  meal: EntytySlice<MealMap>,
  review: EntytySlice<ReviewMap>,
  user: EntytySlice<UserMap>,
}