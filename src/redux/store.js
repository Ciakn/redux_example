import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./cake/CakeReducer";
import { BUY_CAKE } from "./cake/CakeTypes";
import iceCreamReducer from "./iceCream/iceCreamReducer";
export const store = configureStore({
  reducer: { numOfCakes: CakeReducer, numOfIceCream: iceCreamReducer },
});
