import { createSlice } from "@reduxjs/toolkit";

export const listSlice = createSlice({
  name: "list",
  initialState: {
    value: [],
  },
  reducers: {
    toAdd: (state, task) => {
      state.value.push(task.payload);
    },
    toDelete: (state, task) => {
      delete state.value[task.payload];
    },
  },
});

export const { toAdd, toDelete } = listSlice.actions;

export default listSlice.reducer;
