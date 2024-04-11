import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./thunks/get-users.thunk";
const entityAdapter = createEntityAdapter();
export const userSlice = createSlice({
  name: 'user',
  initialState: entityAdapter.getInitialState(),
  reducers: {},
  extraReducers: (builder) => builder.addCase(
    getUsers.fulfilled,
    (state, { payload: users }) => {
      entityAdapter.setAll(state, users);
    }
  )
})