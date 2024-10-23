import express from "express";
import mongoose from "mongoose";
import { shoppyRoutes } from "./Route/shoppy.routes.js";
import { userRoutes } from "./Route/user.routes.js";
import cors from 'cors';




// creating express instance
const shoppyGlobe = new express();

// creating basic server
shoppyGlobe.listen("7100", () => {
    console.log("ShoppyGlobe server running on Port: 7100")
})


// connect to mongoDB
mongoose.connect("mongodb://localhost:27017/");

// checking database connection
const db = mongoose.connection;

db.on("open", () => {
    console.log("Database connection is successfull")
})

db.on("error", () => {
    console.log("Database connection is not successfull")
})


// middleware
// to parse data
shoppyGlobe.use(express.json());

// use cors
shoppyGlobe.use(cors());


// pass shoppyGlobe into route
shoppyRoutes(shoppyGlobe);
// pass shoppyGlobe into userRoute
userRoutes(shoppyGlobe);



// log request status function
export function status(req, res) {
    console.log("Status", res.statusCode)
}


// Handeling wrong routes
shoppyGlobe.get('*', function(req, res){
    status(req, res.status(404))
    res.status(404).json({message: `${req.path} is a wrong path. Try '/products or /products/:id'`})
})

shoppyGlobe.post('*', function(req, res){
    status(req, res.status(404))
    res.status(404).json({message: `${req.path} is a wrong path. Try '/cart'`})
})

shoppyGlobe.put('*', function(req, res){
    status(req, res.status(404))
    res.status(404).json({message: `${req.path} is a wrong path. Try '/cart'`})
})

shoppyGlobe.delete('*', function(req, res){
    status(req, res.status(404))
    res.status(404).json({message: `${req.path} is a wrong path. Try '/cart/:product_id'`})
})