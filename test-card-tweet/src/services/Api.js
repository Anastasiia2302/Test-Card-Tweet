import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = 'https://6454d7f2a74f994b334a82dd.mockapi.io/api/v1/Users';

export const fetchUsers= createAsyncThunk(
  "user/fetchAll",
async (_, thunkAPI) => {
  try {
  const response = await axios.get("/user");
  return response.data;
 }
 catch (e) {
  return thunkAPI.rejectWithValue(e.message);
 }})
  
export const addFollowing = createAsyncThunk(
  "user/addFollowing",
  async ({}, thunkAPI) => {
    try {
      const response = await axios.put("/user", {  });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// export const removeFollowing = createAsyncThunk(
//   "user/removeFollowing",
//   async (contactId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/contacts/${contactId}`);
//       return response.data;
//     } catch (e) {
//       return thunkAPI.rejectWithValue(e.message);
//     }
//   }
// );
