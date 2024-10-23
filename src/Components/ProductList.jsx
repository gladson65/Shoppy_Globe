import { useState, useEffect, useRef } from "react";
import useFetch from '../Utils/useFetch';
import ProductItem from "./ProductItem";
import Loading from "./Loading";
import Error from "./Error";



function ProductList() {

    // storing fetched data in this state
    const [productList, setProductList] = useState([]);
    const [backup, setBackup] = useState([]);
    const {loading, error, data} = useFetch("http://localhost:7100/products")
    const [isData, setIsData] = useState(false);

    useEffect(()=> {
        if(data) {
        setProductList(data)
        setBackup(data)
        if (data.message == 'jwt expired') {
            localStorage.setItem('username', '')
        }
        
        }

        if (isData === true) {
           setTimeout(()=> {
            setIsData(false)
           }, 3000)            
        }

    },[data, isData])

    
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
        
        if (searchedData.length < 1) {
            setProductList(backup.products)
            setIsData(!isData)
        }
        else {            
            setIsData(false)
            setProductList(searchedData)
        }
        
        document.querySelector("#input").value = "";  
    }
        
   
    


    return (
        <>

            {/* search bar section */}
            <div className="searchBar w-full flex justify-center item-center gap-7 mt-40 md:mt-32 p-5">
                <input id="input" onChange={(e)=> handleSearchInput(e)} className="w-10/12 md:w-4/6 lg:w-1/3 text-red-600 transition duration-150 linear h-full p-2 rounded-lg border-2 border-dotted border-emerald-500 focus:outline-violet-500 focus:drop-shadow-[0px_5px_5px_black]" type="text" placeholder="Search Product by Title"/>
                <button onClick={searchItem} className="p-2 sm:w-32 md:w-40 rounded-lg text-white bg-violet-500 hover:bg-violet-600 hover:text-teal-300 transition duration-150 linear focus:ring focus:ring-violet-300 transition-all duration-300 ease-linear hover:scale-90 hover:drop-shadow-[0px_10px_10px_black]
                        hover:font-bold" type="button">Search</button>   
            </div>

            <h1 className="absolute top-72 font-mono md:top-60 w-full text-center text-2xl lg:text-3xl lg:py-2 drop-shadow-[0px_10px_10px_black]">All Products Here</h1>
            
            {
                loading &&
                <Loading/>
            }

            {
                error &&
                <Error />
            }
            
            <section className="productList md:mt-32 mt-32 w-full h-auto grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-7 sm:gap-12 px-2 sm:px-12 pt-12 pb-24 relative">                
                
                {
                    productList &&
                    productList.map((product, i)=> {
                        return <ProductItem key={product._id} info={product}/>
                    })                     
                    
                }


                {
                    isData &&
                    <div className="absolute top-0 text-white bg-black w-full mx-auto flex justify-center items-center">
                        <h1 className="text-center text-yellow-300 sm:text-2xl py-2">Sorry, We Don't sell that!</h1>
                    </div>
                }
                
                
                
            </section>

        </>
    )
}

export default ProductList;