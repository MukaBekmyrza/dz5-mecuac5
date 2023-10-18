import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../api";

const fetchAllPosts = createAsyncThunk("posts/fetchAll", async (payload, thunkApi) => {
  try {
    const response = await api.getPosts();
    console.log(response);
    return response.data;
  } catch (err) {
    return thunkApi.rejectWithValue(
      err.message ? err.message : "Something has gone wrong"
    );
  }
});


export default fetchAllPosts;
