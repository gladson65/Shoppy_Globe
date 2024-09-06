import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../Utils/CartSlice";
import { removeItem } from "../Utils/CartSlice";

function CartItem(props) {

    const items = useSelector((store)=> store.cart.items);
    const dispatch = useDispatch();
    const data = props.info
    const {id, title, brand, quantity, thumbnail, price, rating, stock} = props.info;

    

    function increaseQuantity(item) {
        dispatch(increment(item.id))
    }

    function decrementQuantity(item) {
        dispatch(decrement(item.id))
    }

    function remove(item) {
        dispatch(removeItem(item))
    }

    return(
        <>
            <div key={id} className="w-full h-auto py-2 px-2 bg-yellow-200 drop-shadow-[0px_10px_10px_black] rounded-xl flex flex-col justify-around items-center  md:flex-row md:justify-between md:items-center gap-7 md:gap-7">
                <img src={thumbnail}  className="w-20 md:w-32 drop-shadow-[0px_5px_7px_black]"/>
                <h1 className="text-sm lg:text-lg md:w-auto drop-shadow-[0px_10px_10px_black]">{title}</h1>
                <h2 className="text-sm lg:text-lg md:w-full flex flex-col sm:flex-row justify-center sm:gap-4 md:gap-7 w-full md:drop-shadow-[0px_5px_10px_black]"><span className="text-red-500 font-bold">Quantity {quantity}</span><span className="text-green-600">Total {parseFloat(price * quantity).toFixed(2)}$</span> <span onClick={()=> increaseQuantity(props.info)}><i className="fa-solid fa-plus hover:bg-white rounded-xl p-1 hover:cursor-pointer hover:text-blue-700 transition-all duration-300 ease-linear"></i></span> 
                    <span onClick={()=> decrementQuantity(props.info)}><i className="fa-solid fa-minus hover:bg-white rounded-xl p-1 hover:cursor-pointer hover:text-red-500 transition-all duration-300 ease-linear"></i></span>
                </h2>
                <button className="md:ml-12 sm:mr-2 text-sm w-3/5 sm:w-1/2 md:w-1/6 md:mr-4 lg:w-32 mb-2 md:mb-0 rounded-xl lg:text-lg bg-red-400 hover:bg-red-600 hover:text-white p-2 drop-shadow-[0px_10px_10px_black] transition-all duration-300 ease-linear" onClick={(e)=> remove(data)}>Remove</button>
            </div>
        </>
    )
}

export default CartItem;