import { useParams } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";


function ProductDetails() {

    let param = useParams();
   
    const {data, loading, error} = useFetch("https://dummyjson.com/products")
    const [product, setProducts] = useState([]);
    const [dtails, setDetails] = useState([])
  

    
    
    useEffect(() => {
        if(data) {
            setProducts(data.products)
        }

        
    }, [data])
    

    return(
        <>

                
            
                {
                    product &&

                    product.map((item)=> {
                        if(item.id === Number(param.id)){
                            return <DetailsCard key={item.id} info={item}/>
                        }
                    })    
                            
                        
                
                }
           
        </>
    )
}

export default ProductDetails;


