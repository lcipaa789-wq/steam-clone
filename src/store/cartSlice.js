import { createSlice } from "@reduxjs/toolkit";

// Create cart slice
const cartSlice = createSlice({
  name: "cart",

  // Initial cart state
  initialState: {
    items: [],
  },

  reducers: {
    // Add game to cart
    addToCart: (state, action) => {
      const game = action.payload;

      // Check if game already exists in cart
      const existingGame = state.items.find((item) => item.id === game.id);

      // If game does not exist, add it
      if (!existingGame) {
        state.items.push(game);
      }
    },

    // Remove game from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// Export actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;
