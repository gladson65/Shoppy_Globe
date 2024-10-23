import mongoose from "mongoose";

// creating schema
const { Schema } = mongoose;

const cartSchema = new Schema({

    product_id: {
        type: String,
        unique: true,
        required: true
    },

    quantities: {
        type: Number,
        min: [1],
        required: true
    }

})


const cartModel = mongoose.model("cart", cartSchema);
export default cartModel;