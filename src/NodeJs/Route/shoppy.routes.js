import jwt from "jsonwebtoken";

import { 
    createProduct,
    updateProduct,
    deleteProduct, 
    createCart,
    getProducts,
    getProductById,
    updateQuantity,
    showCartItems,
    removeCartProduct 
} from "../Controller/shoppy.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";


export function shoppyRoutes(app) {

    app.get("/products", verifyToken, getProducts),
    app.get("/products/:id", verifyToken, getProductById),
    app.get("/cartitems", verifyToken, showCartItems),
    app.post("/product", createProduct),
    app.put("/product/:id", verifyToken, updateProduct),
    app.delete("/product/:id", verifyToken, deleteProduct),
    app.post("/cart", verifyToken, createCart),
    app.put("/cart", verifyToken, updateQuantity),
    app.delete("/cart/:id", verifyToken, removeCartProduct)
}