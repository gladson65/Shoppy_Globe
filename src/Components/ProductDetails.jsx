import { useParams } from "react-router-dom";
import useFetch from "../Utils/useFetch";
import { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";


function ProductDetails() {

    let param = useParams();
   
    const {data, loading, error} = useFetch("http://localhost:7100/products")
    const [product, setProducts] = useState([]);
    const [dtails, setDetails] = useState([]);
  

    
    
    useEffect(() => {
        if(data) {
            setProducts(data)
        }

        
    }, [data])
    

    return(
        <>

                
            
                {
                    product &&
                    
                    product.map((item)=> {    
                        if(item._id == param.id){
                            return <DetailsCard key={item._id} info={item}/>
                        }
                    })    
                            
                        
                
                }
           
        </>
    )
}

export default ProductDetails;


