import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import usersReducer from "./usersSlice";
const store = configureStore({
  reducer: {
    colors: colorReducer,
    users: usersReducer,
  },
});

export default store;
