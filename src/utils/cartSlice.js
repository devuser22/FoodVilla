import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  // here state refers to the initial state . it will be used to push the items to the items array
  // action .payload will be used when item in the home page is clicked and then that item is added to the store
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },

    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
  },
});

export const { addItem, clearCart, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
