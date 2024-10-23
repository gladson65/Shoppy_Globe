import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

function Cart() {

    // extracting the state of a component from the redux store
    const items = useSelector((store)=> store.cart.items); 

   
    return(
        <>
            <h1 className="mt-40 w-full text-2xl drop-shadow-[0px_10px_10px_black] text-center text-black font-mono">Your Cart</h1>
            <section className={`w-full h-auto mt-12 bg-zinc-200 grid ${items.length > 0 ? "grid-cols-2" : "grid-cols-1"} md:grid-cols-1 gap-7 py-7 mb-32 px-7 xl:px-32`}>
                {
                    items.length > 0 ?
                    items.map((item)=> {
                        return (
                            
                                <CartItem key={item.id} info={item}/>
                            
                        )
                    })
                    :
                    <div className="w-full h-screen flex justify-center items-front">
                        <div className="mt-20 banner flex flex-col justify-around items-center w-10/12 h-72 py-4 px-5 rounded-xl">
                            <h2 className="text-center text-2xl text-white drop-shadow-[0px_10px_10px_black]">Your Cart Is Empty</h2>
                            <p className="text-3xl p-2 rounded-lg text-black font-bold text-center backdrop-blur md:backdrop-blur-sm xl:backdrop-blur-none">Shop in the name of love</p>
                            <Link className="hover:scale-90 transition-all duration-300 linear" to="/productList"><button className="bg-green-300 hover:bg-green-400 hover:text-white transition-all duration-300 linear py-2 w-32 rounded-lg"><span className="drop-shadow-[0px_10px_10px_black] font-bold">Shop Now</span></button></Link>
                        </div>
                    </div>
                    
                    
                    
                }    
            </section>
            
        </>
    )
}

export default Cart;