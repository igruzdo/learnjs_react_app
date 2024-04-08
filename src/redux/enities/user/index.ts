import { createSlice } from "@reduxjs/toolkit";
import { restaurants } from "../../../constants/mock";
import { UserMap } from "../../../types/store";
import { nanoid } from "nanoid";

const { entities, ids } = restaurants.reduce((acc: { entities: UserMap, ids: string[] }, curr) => {
  const { reviews } = curr;

  const result = reviews.reduce((accUser: { entities: UserMap, ids: string[] }, currReview, reviewIndex) => {
    const userId = nanoid(10);
    accUser.entities[userId] = {
      id: userId,
      name: currReview.user
    };
    accUser.ids.push(userId)
    return accUser;
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

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    entities,
    ids,
  },
  reducers: {}
})