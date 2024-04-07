import { createSlice } from "@reduxjs/toolkit";
import { MealMap } from "../../../types/store";
import { restaurants } from "../../../constants/mock";

const { entities, ids } = restaurants.reduce((acc: { entities: MealMap, ids: string[] }, curr) => {
  const { menu } = curr;

  const result = menu.reduce((accMeal: { entities: MealMap, ids: string[] }, currMeal) => {
    accMeal.entities[currMeal.id] = currMeal;
    accMeal.ids.push(currMeal.id)
    return accMeal;
  }, {
    entities: {},
    ids: []
  })

  acc.entities = {
    ...acc.entities,
    ...result.entities
  }

  acc.ids = [...acc.ids, ...result.ids]

  return acc;
}, {
  entities: {},
  ids: []
})

export const mealSlice = createSlice({
  name: 'meal',
  initialState: {
    entities,
    ids,
  },
  reducers: {}
})