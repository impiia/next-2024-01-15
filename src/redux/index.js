import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "./ui/cart";


export const store = configureStore(
    {
        reducer: combineSlices(
            cartSlice,
            ),
    },
);

console.log(store.getState());