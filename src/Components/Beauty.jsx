import useFetch from "../Utils/useFetch";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { success } from "../Utils/CartSlice";
import { addItem } from "../Utils/CartSlice";
import Error from "./Error";
import Loading from "./Loading";


function Beauty() {

    const {data, error, loading} = useFetch("https://dummyjson.com/products")
    const [beautyProduct, setBeautyProduct] = useState()
    const [successMsg, setSuccessMsg] = useState(true);
    const dispatch = useDispatch();

    useEffect(()=> {
        if (data) {
            setBeautyProduct(data.products);
        }
    }, [data])
    
    // function for add item into the cart
    function addToCart(item) {
        dispatch(addItem(item));
        setSuccessMsg(!successMsg)
        dispatch(success(true))
    }

    useEffect(() => {
        setTimeout(()=> {
            setSuccessMsg(false);
            dispatch(success(false))
           
        }, 3000)
    }, [successMsg])

    return(
        <>
            <h1 className="mt-40 text-center text-2xl font-bold drop-shadow-[0px_10px_10px_black]">Shop</h1>
            
            {
                error &&
                <Error />
            }

            {
                loading &&
                <Loading />
            }
            
            <section className="beautyProducts w-1/2 w-full h-auto mt-7 px-7 pb-14 sm:px-12 md:px-24 grid grid-cols-2 lg:grid-cols-3 xl:gap-12 xl:px-40 gap-2 sm:gap-4">
            {
                beautyProduct &&                
                beautyProduct.map((item)=> {
                    if(item.category == "beauty") {
                        return (
                            <div key={item.id} className="w-full border-4 border-black bg-zinc-100 hover:bg-white rounded-lg flex flex-col items-center">
                                <img src={item.thumbnail} alt="product-image" className="w-32 md:w-full rounded-lg h-50 sm:h-40 object-cover sm:object-contain object-top drop-shadow-[0_5px_5px_black]"/>
                                <h3 className="text-sm md:text-lg text-black py-2 px-2 text-center font-medium">{item.title}</h3>
                                <h4 className="pl-2 text-sm md:text-lg text-green-600 font-bold">{item.brand} (brand)</h4>
                                <h4 className="pl-2 text-sm md:text-lg text-purple-800 font-bold">{item.price} <span className="text-black">&#36;</span></h4>
                                <h4 className="pl-2 text-sm md:text-lg text-sky-600 font-bold">Ratings: <span className="text-black">{item.rating}</span></h4>
                                <h4 className="pl-2 text-sm md:text-lg text-red-700 font-bold">In Stock: <span className="text-black">{item.stock}</span></h4>
                                <Link to={`/product/details/${item.id}`}><button className="pl-2 hover:text-yellow-400 font-bold">View Details</button></Link>
                                <div className="w-full flex justify-center mt-2 mb-2">
                                <button onClick={()=> addToCart(item)} className="bg-yellow-300 rounded-lg px-2 py-2 w-10/12 md:w-3/5 hover:bg-yellow-400">Add To Cart</button>
                                </div>
                            </div>
                        )
                    }
                })
            }

            
            </section>
        </>
    )
}

export default Beauty;