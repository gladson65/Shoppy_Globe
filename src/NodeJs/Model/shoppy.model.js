import mongoose from "mongoose";


// creating schema
const { Schema } = mongoose;

const ProductSchema = new Schema({
    brand: {
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    rating: {
        type: Number,
    },

    returnPolicy: {
        type: String,
    },

    reviews: {
        type: Array,
    },

    thumbnail: {
        type: String,
    },

    description: {
        type: String,
        required: true
    },

    stock: {
        type: Number,
        required: true
    },

    category: {
        type: String,
        required: true
    }
})


const productModel = mongoose.model("products", ProductSchema);
export default productModel;
