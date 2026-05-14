import { configureStore } from "@reduxjs/toolkit";
import gameReducer from "./gameSlice";
import cartReduser from "./cartSlice";
export const store = configureStore({
  reducer: {
    games: gameReducer,
    cart: cartReduser,
  },
});
