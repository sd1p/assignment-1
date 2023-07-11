import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  loading: false,
  users: [],
  error: null,
};

const fetchUsers = createAsyncThunk("user/fetchUser", async (len) => {
  return axios
    .get(`https://random-data-api.com/api/v2/users?size=${len}`)
    .then((response) => {
      if (len > 1) {
        return response.data;
      } else {
        return [response.data];
      }
    });
});

const usersSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = null;
      state.error = action.error.message;
    });
  },
});

export default usersSlice.reducer;
export { fetchUsers };
