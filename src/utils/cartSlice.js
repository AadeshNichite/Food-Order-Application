import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    clearCart: (state) => {
      state.items = [];
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex((x) => x.id === action.payload.id);
      if (index > -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

//Export actions
export const { addItem, clearCart, removeItem } = cartSlice.actions;

//Export reducers
export default cartSlice.reducer;
