import { createSlice } from "@reduxjs/toolkit";

const init = [
  {
    id: 1,
    name: "banana",
    color: "yellow",
    price: 1000,
  },
  {
    id: 2,
    name: "apple",
    color: "red",
    price: 5000,
  },
  {
    id: 3,
    name: "orange",
    color: "orange",
    price: 4000,
  },
];

const fruitSlice = createSlice({
  name: "fruits",
  initialState: init,
  reducers: {
    createFruit: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { createFruit } = fruitSlice.actions;
export default fruitSlice.reducer;
