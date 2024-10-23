import productModel from "../Model/shoppy.model.js";
import cartModel from "../Model/cart.model.js";




// to fetch all products
export function getProducts(req, res) {

    productModel.find().then((data) => {

        if (!data) {
            return res.status(404).json({message: "No data found!"})
        }

        res.json(data);
    
    }).catch((error) => {
        return res.status(500).json({error: error.message})
    })
}


// to fetch product by ID
export function getProductById(req, res) {

    const _id = req.params.id;

    productModel.findById(_id).then((data) => {

        if (!data) {
            return res.status(404).json({messge: `No data found with this '${_id}' ID`})
        }

        res.json(data)
    
    }).catch((error) => {
        return res.status(500).json({error: error.message})
    })
}


// create a new product into database
export function createProduct(req, res) {

    const { brand, title, rating, price, description, stock, returnPolicy, thumbnail, category } = req.body;

    // key validations
    if (!brand) {
        return res.json({message: "Key Should be 'name' and must be String. (required)"});
    }

    if (!price) {
        return res.json({message: "Key Should be 'price' and must be Number. (required)"})
    }

    if (!description) {
        return res.json({message: "Key Should be 'description' and must be String. (required)"})
    }

    if (!stock) {
        return res.json({message: "Key Should be 'stock_quantity' and must be Number. (required)"})
    }


    // check same product existence in the DB
    productModel.findOne({title: title}).then((product)=> {

        // .if no existence then add new product
        if (!product) {
            // data preparation for Schema
            const newProduct = new productModel({
                brand,
                title,
                price,
                rating,
                description,
                stock,
                returnPolicy,
                thumbnail,
                category

            })

            newProduct.save().then((data) => {

                if (!data) {
                    return res.status(400).json({message: "Something went wrong"});
                }

                res.send(data)
            
            }).catch(error => {
                return res.status(500).json({error: error.message})
            });
        }
        else {
            return res.status(400).json({message: "Product is already exist with the same name"});
        }
        
        
    })
    
}


// update the existing product
export function updateProduct(req, res) {

    const product_id = req.params.id;

    if (req.body.name || req.body.price || req.body.description || req.body.stock_quantity) {
        
        productModel.findByIdAndUpdate(product_id, req.body).then((data) => {

            if (!data) {
                return res.status(404).json({message: `No product found with this ID: ${product_id}`})
            }
    
            return res.status(201).json({message: "Product successfuly updated", product: data, updated: req.body})
    
    
        }).catch((error) => {
            return res.status(500).json({error: error.message});
        }) 

    }
    else {
        return res.status(400).json({message: "You have to fill atleast any one of the field (name, price, description, stock_quantity) to update"})
    }
    
    
}


// deleting product from productModel
export function deleteProduct(req, res) {

    const product_id = req.params.id;

    productModel.findByIdAndDelete({_id: product_id}).then((data) => {

        if(!data) {
            return res.status(404).json({message: `No product found with this ID: ${product_id}`})
        }

        return res.status(200).json({message: "Product successfully deleted", product: data})
    }).catch((error) => {
        return res.status(500).json({error: error.message})
    })

    // delete that product from the cart also
    const pId = {product_id: `${product_id}`};

    cartModel.findOneAndDelete(pId).then((data) => {
    
    }).catch((error) => {
        return res.status(500).json({error: error.message, message: "Invalid ID"})
    })
}


// "name": "Notebook",
// "price": 60,
// "description": "jdbvohbdvjbkvjhbdvohdlh",
// "stock_quantity: 500

// {
//     "product_id": "66f2ddb30b6003e7d2fc07a1",
//     "quantities": 1
//   }

// insert a product into the cart (cartModel)
export function createCart(req, res) {

    const { product_id, quantities } = req.body;

    if (!product_id) {
        return res.json({message: "Key Should be 'product_id'"})
    }

    if (!quantities) {
        return res.json({message: "Key Should be 'quantities' and at least one or more"})
    }

    productModel.findOne({_id: `${product_id}`}).then((product) => {

        if (!product) {
            return res.status(404).json({message: `No such product with ID: ${product_id}`})
        }

        else {

            // check at first the item is already in the cart or not
            cartModel.findOne({product_id: `${product_id}`}).then((data) => {

                if (!data) {

                    //Insert Item into the cart database if the item not in cart database.
                    // preparing data to put inside the database
                    const newCart = new cartModel({
                        product_id,
                        quantities
                    })

                    newCart.save().then((data) => {

                        if(!data) {
                            return res.status(400).json({message: "Something Went Wrong!"})
                        }

                        res.status(201).json({message: "Item added to the cart", item: data});
                    
                    })


                } else {
                    res.send("Product is already in the cart. Check in the cart section");
                }
            
            }).catch((error) => {
                return res.json({error: error.message})
            })
            
        }
    }).catch((error) => {
        return res.json({message: "Invalid Product ID", error: error.message})
    })


    
    
}


// updating cart quantity
export function updateQuantity(req, res) {

    const { product_id, quantities } = req.body;

    if (!product_id) {
        return res.json({message: "Key Should be 'product_id'"})
    }

    if (!quantities) {
        return res.json({message: "key Should be 'quantities' and at least 1 product"})
    }



    const pId = {product_id: `${product_id}`};
    const newQuantity = {quantities : quantities};


    cartModel.findOneAndUpdate(pId, newQuantity).then((product) => {

        if (!product) {
            return res.status(404).json({message: `No such data with id: "${req.body.product_id}" to update product quantity`})
        }

        return res.status(201).json({message: "Quantity successfully updated", update: req.body })


    }).catch((error) => {
        return res.status(500).json({error: error.message})
    })
}


// fetching all cart products
export function showCartItems(req, res) {

    cartModel.find({}).then((data) => {

        if (!data) {
            return res.status(200).json({message: "Cart is empty!"})
        }

        res.status(200).json(data)
    
    }).catch((error) => {
        return res.status(500).json({error: error.message});
    })
}


// delete a product from the cart by product_id
export function removeCartProduct(req, res) {

    const pId = {product_id: `${req.params.id}`};

    cartModel.findOneAndDelete(pId).then((data) => {

        if(!data) {
            return res.status(404).json({message: `No such data with ID:${req.params.id} to delete.`})
        }

        res.send("Product removed from the cart")
    
    }).catch((error) => {
        return res.status(500).json({error: error.message})
    })
}