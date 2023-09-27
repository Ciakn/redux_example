import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import CakeReducer from "./cake/CakeReducer";
import { BUY_CAKE } from "./cake/CakeTypes";
import iceCreamReducer from "./iceCream/iceCreamReducer";
import userReducer from "./userData/userReducer";
export const store = configureStore({
  reducer: { numOfCakes: CakeReducer, numOfIceCream: iceCreamReducer , userData : userReducer },
} , applyMiddleware(thunk));
