import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from "./cake/CakeReducer";
import { BUY_CAKE } from "./cake/CakeTypes";
  export  const store  = configureStore({
    reducer : CakeReducer,
})