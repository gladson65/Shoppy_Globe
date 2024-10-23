import { useState } from "react";
import { useNavigate } from "react-router-dom";



function SignIn() {

    const [ isSign, setIsSign ] = useState(true);
    const [ username, setUsername ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");

    const [ loginEmail, setLoginEmail ] = useState("");
    const [ loginPassword, setLoginPassword ] = useState("");
    
    //sign-in error state variable 
    const [ error, setError ] = useState("");
    const [ userError, setUserError ] = useState(false);
    const [ passwordError, setPasswordError ] = useState(false);
    const [ emailError, setEmailError ] = useState(false);

    //login-in error state variable 
    const [ loginError, setLoginError ] = useState("");
    const [ loginPasswordError, setLoginPasswordError ] = useState(false);
    const [ loginEmailError, setLoginEmailError ] = useState(false);
   
   

    // for page redirect
    const navigate = useNavigate()

    function toggleForm() {
        setIsSign(!isSign);
    } 

    function signIn(e) {

        e.preventDefault();

        const response = fetch("http://localhost:7100/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({username: username, email: email, password: password}),
        })

        const result = response.then((data) => {
            return data.json();
        })
        result.then((data) => {

            if (data.error) {
                setError(data.message);
                data.error == 'username' ? `${setUserError(!userError)} ${setEmailError(false)} ${setPasswordError(false)}`:
                data.error == "email" ? `${setEmailError(!emailError)} ${setUserError(false)} ${setPasswordError(false)}`:
                data.error == "password" ? `${setPasswordError(!passwordError)} ${setEmailError(false)} ${setUserError(false)}`:
                    `${setPasswordError(false)} ${setEmailError(false)} ${setUserError(false)}`
            }

            // pass to login page
            setTimeout(() => {
                if (data.key == 'success') {
                    setEmailError(false);
                    setPassword(false)
                    setIsSign(!isSign)
                }
            }, 2000)

            console.log(data)
        });
        // console.log(username, email, password);
        
    }


    function logIn(e) {

        e.preventDefault()

        const response = fetch("http://localhost:7100/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email: loginEmail, password: loginPassword})
        })

        const result = response.then((data) => {
            return data.json();
        })

        result.then((data) => {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem("username", data.User);
            localStorage.setItem("email", data.email);
            // localStorage.setItem("channelId", data.)
            if (data.error) {
                setLoginError(data.message);
                data.error == 'email' ? `${setLoginEmailError(true)} ${setLoginPasswordError(false)}` :
                data.error == 'password' ? `${setLoginPasswordError(true)} ${setLoginEmailError(false)}`:
                data.error == "notRegistered" ? `${setLoginPasswordError(false)} ${setLoginEmailError(false)}` : ""
            }

            if (data.User) {
                localStorage.setItem("login", 'true');
                navigate("/");
            }
            
        })
    }

    return (
        <div className="w-screen h-screen flex justify-center items-center mt-20">

            {
                isSign ?

                <>
                <h1 className="absolute top-36 text-red-500 w-screen py-2 px-20 text-center">{error && error}</h1>
                <div className="bg-yellow-200 pb-7 w-7/12 lg:w-2/5 h-9/12 lg:h-3/5 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] overflow-hidden">
                    <h1 className="text-center mt-4 py-2 text-3xl">Sign in</h1>
                    <form className="h-80 mt-7 flex flex-col justify-center gap-2 px-7 pb-4">
                        
                        <label htmlFor="username">Username</label>
                        <input onChange={(e)=> setUsername(e.target.value)} id="username" type="text" required placeholder="Username"
                            className={`h-10 rounded-lg outline-none border-2 px-3 ${userError && "outline-red-500"}`}/>

                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=> setEmail(e.target.value)} id="email" type="email" required placeholder="Email"
                            className={`h-10 rounded-lg outline-none border-2 px-3 ${emailError && "outline-red-500"}`}/>

                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=> setPassword(e.target.value)} id="password" type="password" placeholder="Password"
                            className={`h-10 rounded-lg outline-none border-2 px-3 ${passwordError && "outline-red-500"}`}/>
                        
                        <div className="flex justify-center items-center py-2">
                            <button onClick={signIn} className="bg-black text-white py-2 px-4 rounded-xl 
                                hover:bg-sky-200 hover:text-black drop-shadow-[0px_2px_3px_black]">
                                Sign In
                            </button>
                        </div>
                    </form>

                    <div className="flex justify-center">
                        <h2 className="text-blue-500">Do you have an account?  
                            <span onClick={toggleForm} className="cursor-pointer hover:underline hover:text-blue-700 pl-2">
                                login
                            </span>
                        </h2>
                    </div>
                </div>
                </>
            
            :
            
                
                
                <>
                <h1 className="absolute top-36 text-red-500 w-screen py-2 px-20 text-center">{loginError && loginError}</h1>
                <div className="bg-green-100 pb-2 h-auto w-7/12 lg:w-2/5 h-3/5 rounded-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]">
                    <h1 className="text-center mt-4 text-slate-700 text-3xl py-2">Log in</h1>
                    <form className="h-80 mt-7 flex flex-col justify-center gap-2 px-7 pb-10">

                        <label htmlFor="email">Email</label>
                        <input onChange={(e)=> setLoginEmail(e.target.value)} id="email" type="email" required placeholder="Email"
                            className={`h-10 rounded-lg outline-none border-2 px-3 ${loginEmailError && "outline-red-500"}`}/>

                        <label htmlFor="password">Password</label>
                        <input onChange={(e)=> setLoginPassword(e.target.value)} id="password" type="password" placeholder="Password"
                            className={`h-10 rounded-lg outline-none border-2 px-3 ${loginPasswordError && "outline-red-500"}`}/>

                        <div className="flex justify-center items-center py-2">
                            <button onClick={logIn} className="bg-green-300  mt-7 px-6 py-2 rounded-xl 
                                    hover:bg-sky-200 drop-shadow-[0px_2px_3px_black]">
                                    Log In
                            </button>
                        </div>

                    </form>

                    <div className="flex justify-center">
                        <h2 className="text-blue-500">Create an account?  
                            <span onClick={toggleForm} className="cursor-pointer hover:underline hover:text-blue-700 pl-2">
                                Sign-in
                            </span>
                        </h2>
                    </div>
                </div>
                </>
            }
            
            
        </div>
    )
}

export default SignIn;

