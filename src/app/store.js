import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../featurs/products/ProductsSlice";


const store = configureStore({
    reducer: {
        productsReducer: productsReducer,
    }
})

export default store;