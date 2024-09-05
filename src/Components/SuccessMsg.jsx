import { useState, useRef } from "react";
import { useSelector } from "react-redux";


function Success() {

   const msg = useSelector((store)=> store.cart.msg)
    
    
    return (
        <>
           {
                msg === true &&
                <h1 className="w-full mt-40 fixed z-50 text-center bg-green-600 py-2 text-black font-bold">
                    <span className="drop-shadow-[0px_10px_10px_black]"><span className="text-yellow-200">Product Added.</span> Go To The Cart And Checkout</span>
                </h1>
           }
            
           
        </>
        
    )
}

export default Success;