import { createSlice } from "@reduxjs/toolkit";



const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        msg: false,
    },
    reducers: {
        addItem: (state, action) => {
        
            let item = state.items.find((item) => item._id === action.payload._id)
            const data = {...action.payload, quantity: 1}

            if (!item) {
                state.items.push(data); 
            }
            else {
                item.quantity++;
            }
            
            
          
        },

        increment: (state, action) => {
            let item = state.items.find((item) => item.id === action.payload)
            
            if (item && item.quantity >= 1) {
                item.quantity++;
            }
        },

        decrement: (state, action) => {
            let item = state.items.find((item) => item.id === action.payload);

            if (!item || item.quantity <= 1) {
                alert("Atleast One Product")
                return;
            }
            else {
                item.quantity--;
            }
        },

        removeItem: (state, action) => {
            // state.items.pop(action.payload);
            let item = state.items.find((item) => item.id === action.payload.id);
            const newArr = state.items.filter((item)=> item.id != action.payload.id)
            state.items = newArr;
            
        },

        clearCart: (state, acton) => {
            state.items.length = 0;
        },

        success: (state, action) => {
            state.msg = action.payload;
        },
    },
})

export const {addItem, increment, decrement, removeItem, clearCart, success} = cartSlice.actions;

export default cartSlice.reducer