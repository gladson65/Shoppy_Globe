import { useState, useEffect } from "react";
import useFetch from '../Utils/useFetch';
import ProductItem from "./ProductItem";
import Loading from "./Loading";



function ProductList() {

    // storing fetched data in this state
    const [productList, setProductList] = useState([]);
    const {loading, error, data} = useFetch("https://dummyjson.com/products")
    const [isdata, setIsData] = useState(false)

    useEffect(()=> {
        if(data) {
        setProductList(data.products)
        }

        if (error) {
            console.log(error);
        }
    },[data])

    
    // function for search text
    let searchText = "";
    function handleSearchInput(e) {
        searchText = e.target.value;
    }

    // search item function
    function searchItem(e) {
        e.preventDefault();
        let searchedData = productList.filter((product) => {
            return product.title.toLowerCase().includes(searchText)
        })
        
        setProductList(searchedData);
        
        if (productList.length <= 0) {
            setIsData(false)
        }
        document.querySelector("#input").value = "";
        console.log(searchText)
        
    }
    
   


    return (
        <>

            {/* search bar section */}
            <div className="searchBar w-full flex justify-center item-center gap-7 mt-40 md:mt-32 p-5">
                <input id="input" onChange={(e)=> handleSearchInput(e)} className="w-10/12 md:w-4/6 lg:w-1/3 text-red-600 transition duration-150 linear h-full p-2 rounded-lg border-2 border-dotted border-emerald-500 focus:outline-violet-500 focus:drop-shadow-[0px_5px_5px_black]" type="text" placeholder="Search Product by Title"/>
                <button onClick={searchItem} className="p-2 sm:w-32 md:w-40 rounded-lg text-white bg-violet-500 hover:bg-violet-600 hover:text-teal-300 transition duration-150 linear focus:ring focus:ring-violet-300 transition-all duration-300 ease-linear hover:scale-90 hover:drop-shadow-[0px_10px_10px_black]
                        hover:font-bold" type="button">Search</button>   
            </div>

            <h1 className="absolute top-72 md:top-60 w-full text-center text-2xl lg:text-3xl lg:py-2 drop-shadow-[0px_10px_10px_black]">All Products Here</h1>
            
            {
                loading &&
                <Loading/>
            }
            
            <section className="productList md:mt-32 mt-32 w-full h-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 sm:gap-12 px-2 sm:px-12 pt-12 pb-24">                
                
                {
                    productList &&
                    productList.map((product)=> {
                        return <ProductItem key={product.id} info={product}/>
                    })                     
                    
                }


                {
                    isdata &&
                    <div className="w-full mx-auto flex justify-center items-center">
                        <h1 className="text-center">No Data Found...</h1>
                    </div>
                }
                
                
                
            </section>

        </>
    )
}

export default ProductList;