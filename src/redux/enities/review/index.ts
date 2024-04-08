import { createSlice } from "@reduxjs/toolkit";
import { ReviewMap } from "../../../types/store";
import { restaurants } from "../../../constants/mock";

const { entities, ids } = restaurants.reduce((acc: { entities: ReviewMap, ids: string[] }, curr) => {
  const { reviews } = curr;

  const result = reviews.reduce((accReview: { entities: ReviewMap, ids: string[] }, currReview) => {
    accReview.entities[currReview.id] = currReview;
    accReview.ids.push(currReview.id)
    return accReview;
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

export const reviewSlice = createSlice({
  name: 'review',
  initialState: {
    entities,
    ids,
  },
  reducers: {}
})