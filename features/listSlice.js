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
      state.value.splice(task.payload, 1);
      console.log(state.value)
    },
  },
});

export const { toAdd, toDelete } = listSlice.actions;

export default listSlice.reducer;
