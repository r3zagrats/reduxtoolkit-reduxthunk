import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("user/", async (params, thunkAPI) => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const respone = await fetch(url);
  const data = await respone.json();
  return data;
});

const initialState = {
  status: null,
  message: "",
  data: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducer: {},
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.status = "requesting";
    },
    [getPosts.fulfilled]: (state, action) => {
      state.status = "successful";
      state.data = action.payload;
    },
    [getPosts.rejected]: (state, action) => {
      state.status = "failed";
      state.message = action.payload;
    },
  },
});

const { reducer: userReducer } = userSlice;

export default userReducer;
