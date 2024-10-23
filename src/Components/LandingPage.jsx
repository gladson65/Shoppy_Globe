import "./LandingPage.css";
import { Link } from "react-router-dom";


function LandingPage() {


    return(
        <>
            <section className="LandingPage gap-2 flex flex-col md:flex-row justify-around items-center relative">
                <div className="flex flex-col justify-center items-center mt-4 lg:mt-52 h-full w-full p-5 md:w-1/5">
                    
                </div>
                
                <div className="mt-40 backdrop-blur-sm lg:mt-52 h-96 order-first md:order-none md:h-screen md:w-screen lg:w-4/5 w-5/6 p-5 md:w-full lg:w-1/2 bg-transparent rounded-full">
                    <img className="w-full h-full drop-shadow-[0px_20px_20px_skyblue]" src="woman.png" alt="woman-image"/>
                </div>

                <div className="banner font-mono flex flex-col justify-around items-center absolute bottom-0 w-10/12 md:w-2/5 md:h-52 lg:w-2/5 xl:w-1/2 bottom-2 w-11/12 sm:w-10/12 mb-4 md:top-64 md:left-16 lg:left-22 xl:top-64 xl:left-22 py-4 px-5 bg-yellow-200 sm:bg-slate-700 rounded-xl">
                    <h2 className="text-center text-2xl text-white drop-shadow-[0px_10px_10px_black]">Fashion Sale</h2>
                    <p className="text-3xl p-2 rounded-lg text-black font-bold text-center backdrop-blur-sm xl:backdrop-blur-none">Shop in the name of love</p>
                    <Link className="hover:scale-90 transition-all duration-300 linear" to="/productList"><button className="bg-green-300 hover:bg-green-400 hover:text-white transition-all duration-300 linear py-2 w-32 rounded-lg"><span className="drop-shadow-[0px_10px_10px_black] font-bold">Shop Now</span></button></Link>
                </div>
            </section>

            <section className="categorySection bg-slate-700 px-24 xl:px-24 sm:px-5 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                <Link className="font-mono hover:scale-90 transition-all duration-300 ease-in-out rounded-xl hover:drop-shadow-[0px_20px_20px_white]" to="/beauty/products"><div className="h-full p-5 rounded-xl shadow-sm bg-white hover:bg-teal-200 drop-shadow-[0px_20px_10px_black] ">
                        <img src="\src\assets\beautyCategory.jpg" alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_black]"/>
                        <h3 className="text-2xl text-black py-3 text-center font-medium drop-shadow-[0px_10px_10px_black]">Beauty Products</h3>
                     </div>
                </Link>
                <Link className="font-mono hover:scale-90 transition-all duration-300 ease-in-out rounded-xl hover:drop-shadow-[0px_20px_20px_white]" to="/fragrance/products"><div className="h-full p-5 rounded-xl shadow-sm bg-white hover:bg-teal-200 drop-shadow-[0px_20px_10px_black]">
                    <img src="\src\assets\fragranceCategory.jpg" alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_black]"/>
                    <h3 className="text-2xl text-black py-3 text-center font-medium drop-shadow-[0px_10px_10px_black]">Fragrances</h3>
                </div>
                </Link>
                
                <Link className="font-mono hover:scale-90 transition-all duration-300 ease-in-out rounded-xl hover:drop-shadow-[0px_20px_20px_white]" to="/grocery/products"><div className="h-full p-5 rounded-xl shadow-sm bg-white hover:bg-teal-200 drop-shadow-[0px_20px_10px_black]">
                    <img src="\src\assets\groceryCategory.jpg" alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_black]"/>
                    <h3 className="text-2xl text-black py-3 text-center font-medium drop-shadow-[0px_10px_10px_black]">Grocery</h3>
                </div>
                </Link>
                
                <Link className="font-mono hover:scale-90 transition-all duration-300 ease-in-out rounded-xl hover:drop-shadow-[0px_20px_20px_white]" to="/furniture/products">
                <div className="h-full p-5 rounded-xl shadow-sm bg-white hover:bg-teal-200 drop-shadow-[0px_20px_10px_black]">
                    <img src="\src\assets\furnitureCategory.jpg" alt="product-image" className="w-full rounded-lg h-80 object-cover object-top drop-shadow-[0_10px_10px_black]"/>
                    <h3 className="text-2xl text-black py-3 text-center font-medium drop-shadow-[0px_10px_10px_black]">Furniture</h3>
                </div>
                </Link>
            </section>
        </>
    )
}

export default LandingPage;


