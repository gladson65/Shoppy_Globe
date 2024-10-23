import { useState } from "react";



function DetailsCard(props) {

   
    const {title, thumbnail, price, rating, stock, description, reviews,
            returnPolicy} = props.info;
    
    console.log(props.info)    
    return(
        <>
            <div className="detailsCard w-full mt-40 p-7 h-auto bg-zinc-300 flex flex-col justify-start
                            items-center md:flex-row gap-7">

                <img className="w-2/3 lg:w-96 h-96 md:self-start lg:self-start xl:self-start rounded-lg self-center sm:self-center drop-shadow-[0px_-10px_10px_black]" src={thumbnail} alt="CoverImage" />        

                <div className="bg-white w-full self-start py-12 px-5 md:pt-24 lg:py-20 xl:py-20 lg:px-24 xl:px-24 md:px-7 h-auto rounded-lg relative drop-shadow-[0px_10px_10px_black]">
                    <h4 className="text-center py-2 text-3xl text-red-700 absolute top-1 drop-shadow-[0px_10px_10px_black]">{title}</h4>
                    <h4 className="mb-2 mt-5 xl:mt-0 "><span className="text-green-500">Price</span> - {price} &#36;</h4>
                    <h4 className="mb-2 mt-5 xl:mt-0 "><span className="text-green-500">Stock</span> - {stock}</h4>
                    <h4 className="mb-2 mt-5 xl:mt-0 "><span className="text-green-500">Warranty Information</span> - {}</h4>
                    <h4 className="mb-2 mt-5 xl:mt-0 "><span className="text-green-500">Return Policy</span> - {returnPolicy}</h4>
                    <p className="mb-2 mt-5 xl:mt-0 "><span className="text-green-500">Description</span> - {description}</p>
                </div>
            </div>

            <h1 className="py-5 w-full text-center text-3xl text-red-700 drop-shadow-[0px_10px_10px_black]">Reviews</h1>
            <div className="reviews w-full h-auto bg-slate-800 py-7 grid xl:grid-cols-3 sm:grid-cols-2 gap-7 px-12 mb-7">
                {
                    reviews &&
                    reviews.map((review, i) => {
                        return(
                            <div key={i} className="w-auto h-auto bg-white rounded-xl py-5 px-7 flex flex-col items-center text-sm">
                                <p className="w-full text-blue-500 font-bold">Comment - "<span className="text-red-700">{review.comment}</span>"</p>
                                <h1 className="w-full text-blue-500 font-bold">Reviewer - <span className="text-teal-600">{review.reviewerName}</span></h1>
                                <h2 className="w-full text-blue-500 font-bold">Rating - <span className="text-yellow-500">{review.rating}</span></h2>
                                <h2 className="w-full text-blue-500 font-bold">Mail - <span className="text-black">{review.reviewerEmail}</span></h2>
                                <h2 className="w-full text-blue-500 font-bold">Comment Date - <span className="text-slate-700">{Date(review.date)}</span></h2>
                            </div>
                        )
                    })
                }
            </div>
            
        </>
    )
}

export default DetailsCard;