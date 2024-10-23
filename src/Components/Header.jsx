import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

function Header() {

    const username = localStorage.getItem('username');
    const cartItems = useSelector((store) => store.cart.items);
    const [toggleMenu, setToggleMenu] = useState(true);

    function menuBar() {
        setToggleMenu(!toggleMenu);
    }

    useEffect(() => {
        toggleMenu;
    }, [username])


    return(
        <>
            
            <header className="w-full overflow-visible p-7 bg-emerald-400 fixed z-50">
                <div className="w-full flex justify-around items-center">
                    <p className="text-xl md:text-2xl p-4 drop-shadow-[0_10px_10px_black] cursor-pointer">
                        <span className="text-teal-50">SHOPPY <span className="text-orange-400">GLOBE</span></span>
                    </p>
                    
                    <div className="md:flex justify-around items-center w-1/3 hidden list-none">
                        
                        <Link className="p-2" to="/">
                            <li className="hover:text-yellow-300 hover:scale-90 transition-all duration-300 linear hover:drop-shadow-[0Px_10px_10px_black] p-2">
                                Home
                            </li>
                        </Link>
                        <Link to="/productList">
                            <li className="hover:text-yellow-300 hover:scale-90 transition-all duration-300 linear hover:drop-shadow-[0Px_10px_10px_black] p-2">
                                Product List
                            </li>
                        </Link>
                        <Link to="/cart">
                            <li className="hover:text-yellow-300 hover:scale-90 transition-all duration-300 linear hover:drop-shadow-[0Px_10px_10px_black] p-2">
                                Cart
                            </li>
                        </Link>
                        <Link to={username == '' || username == null ? "/sign-in" : "/dashboard"}>
                            <li className="hover:text-yellow-300 hover:scale-90 transition-all duration-300 linear hover:drop-shadow-[0Px_10px_10px_black] p-2">
                                {username == '' || username == null ? "Sign in" : username}
                            </li>
                        </Link>

                    </div>

                    <div className="px-4 relative overflow-hidden">
                        <Link to="/cart"><img src="cart.png" alt="Cart-Image" className="w-8 md:w-10 transition-all duration-300 linear hover:scale-75"/></Link>
                        <span className="absolute top-3 text-white bg-orange-400 rounded-full px-1  text-sm">{cartItems.length > 0 ? cartItems.length : "0"}</span>
                    </div>

                    {/* toggle menu button */}
                    <div className="toggleMenu md:hidden">
                        {
                            toggleMenu ? 
                            <i onClick={menuBar} className="fa-solid fa-ellipsis-vertical text-2xl relative top-1 cursor-pointer hover:text-white hover:bg-black px-2 rounded-xl transition-all duration-300 ease-in-out"></i>
                            :
                            <i onClick={menuBar} className="fa-solid fa-xmark text-2xl relative top-1 cursor-pointer hover:text-red-400 hover:bg-black px-1 rounded-xl transition-all duration-300 ease-in-out"></i>
                        }
                        
                    </div>

                    <div className={`${toggleMenu ? "hidden" : "flex flex-col gap-7"} absolute top-28 h-auto right-0 list-none bg-blue-300 p-4 w-1/2 h-72 rounded-xl z-50 font-serif`}> 
                        
                        <Link className="bg-yellow-200 rounded-lg hover:bg-slate-700 text-center py-4 transition-all duration-300 linear drop-shadow-[0px_10px_10px_black] hover:drop-shadow-[0px_5px_10px_lightgreen] hover:text-white" to="/">
                            <span className="drop-shadow-[0px_10px_10px_black]">
                                Home
                            </span>
                        </Link>
                        
                        <Link className="bg-yellow-200 rounded-lg hover:bg-slate-700 text-center py-4 transition-all duration-300 linear drop-shadow-[0px_10px_10px_black] hover:drop-shadow-[0px_5px_10px_lightgreen] hover:text-white" to="/productList">
                            <span className="drop-shadow-[0px_10px_10px_black]">
                                Product List
                            </span>
                        </Link>

                        <Link className="bg-yellow-200 rounded-lg hover:bg-slate-700 text-center py-4 transition-all duration-300 linear drop-shadow-[0px_10px_10px_black] hover:drop-shadow-[0px_5px_10px_lightgreen] hover:text-white" to="/cart">
                            <span className="drop-shadow-[0px_10px_10px_black]">Cart</span>
                        </Link>

                        <Link className="bg-yellow-200 rounded-lg hover:bg-slate-700 text-center py-4 transition-all duration-300 linear drop-shadow-[0px_10px_10px_black] hover:drop-shadow-[0px_5px_10px_lightgreen] hover:text-white" to={username == '' || username == null ? "/sign-in" : "/dashboard"}>
                            <span className="drop-shadow-[0px_10px_10px_black]">
                                {username == '' || username == null ? "Sign in" : username}
                            </span>
                        </Link>

                    </div>    
                </div>

                
            </header>
            
        </>
    )
}



export default Header;