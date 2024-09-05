import { useRouteError } from "react-router-dom";
import { Link } from "react-router-dom";


function Error() {

    const error = useRouteError();
  
    return(
        <>
            <section className="errorSection w-full h-screen flex justify-center items-center bg-slate-700">
                <div className="md:w-1/2 w-10/12 h-auto p-5 text-center flex flex-col bg-teal-500 rounded-xl gap-7">
                    <h1 className="text-4xl p-5 text-white drop-shadow-[0px_10px_10px_black] cursor-pointer"><Link to="/">SHOPPY<span className="text-orange-300">GLOBE</span></Link></h1>
                    <p className="text-7xl p-5 text-orange-400">{error.status}</p>
                    <p className="text-xl text-red-800">Page {error.statusText}</p>
                    <p className="text-2xl text-slate-900">{error.data}</p>
                    <Link className="p-5" to="/"><button className="w-40 py-2 bg-green-700 text-white mx-auto rounded-xl hover:bg-teal-600 
                    drop-shadow-[0px_10px_10px_black] transition duration-150 linear hover:drop-shadow-[0px_-5px_5px_black] hover:text-yellow-200">
                        Back To Shopping</button> </Link>
                </div>
            </section>
        </>
    )
}

export default Error;