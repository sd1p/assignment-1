import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  colors: ["yellow"],
};

const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    addColor: (state, action) => {
      if (state.colors.length < 10) {
        state.colors.splice(action.payload.index + 1, 0, action.payload.color);
      }
      console.log(action.payload);
    },
  },
});

export default colorSlice.reducer;
export const { addColor } = colorSlice.actions;
