import { createSlice } from "@reduxjs/toolkit";
import { restaurants } from "../../../constants/mock";
import { RestaurantMap } from "../../../types/store";

const { entities, ids } = restaurants.reduce((acc: { entities: RestaurantMap, ids: string[] }, curr) => {
  const { id, name } = curr;
  acc.entities[curr.id] = {
    id,
    name,
    menu: curr.menu?.map(({ id }) => id),
    reviews: curr.reviews?.map(({ id }) => id),
  }
  acc.ids.push(id);
  return acc;
}, {
  entities: {},
  ids: []
})

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState: {
    entities,
    ids,
  },
  reducers: {}
})