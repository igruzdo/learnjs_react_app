import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStore } from "../../../../types/store";
import { selectUserIds } from "../selector";

export const getUsers = createAsyncThunk('user/getUsers', async () => {
  const response = await fetch('http://localhost:3001/api/users/');

  return response.json();
},
  {
    condition: (_, { getState }) => !selectUserIds(getState() as AppStore)?.length
  }
) 