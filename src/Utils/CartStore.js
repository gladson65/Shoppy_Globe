import { configureStore }  from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";

// creating a store for cart

const CartStore = configureStore({
    reducer: {
        cart: cartReducer,
    }
})

export default CartStore;