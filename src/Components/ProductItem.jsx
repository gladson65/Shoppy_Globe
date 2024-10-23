import { useDispatch } from "react-redux";
import { addItem } from "../Utils/CartSlice";
import { success } from "../Utils/CartSlice";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";


function ProductItem(props) {

    const {_id, title, brand, thumbnail, price, rating, stock} = props.info;
    const dispatch = useDispatch();
    const [successMsg, setSuccessMsg] = useState(true);
    
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
            
            <div className="h-full rounded-xl pb-2 shadow-sm border-4 hover:border-yellow-300 border-slate-800 drop-shadow-[0px_10px_10px_black] transition duration-200 linear hover:bg-white hover:drop-shadow-[0px_-3px_14px_skyblue]">
                <img src={thumbnail} alt="product-image" className="w-full rounded-lg h-50 sm:h-40 object-cover sm:object-contain object-top drop-shadow-[0_5px_5px_black]"/>
                <h3 className="text-sm md:text-lg text-black py-2 px-2 text-center font-medium">{title}</h3>
                <h4 className="pl-2 text-sm md:text-lg text-green-600 font-bold">{brand} (brand)</h4>
                <h4 className="pl-2 text-sm md:text-lg text-purple-800 font-bold">{price} <span className="text-black">&#36;</span></h4>
                <h4 className="pl-2 text-sm md:text-lg text-sky-600 font-bold">Ratings: <span className="text-black">{rating}</span></h4>
                <h4 className="pl-2 text-sm md:text-lg text-red-700 font-bold">In Stock: <span className="text-black">{stock}</span></h4>
                <Link to={`/product/details/${_id}`}><button className="pl-2 hover:text-yellow-400 font-bold">View Details</button></Link>
                <div className="w-full flex justify-center mt-2 mb-2">
                <button onClick={()=>addToCart(props.info)} className="bg-yellow-300 rounded-lg px-2 py-2 w-10/12 md:w-1/2 hover:bg-yellow-400">
                   Add To Cart
                </button>
                </div>
            </div>
        </>
    )
}

export default ProductItem;