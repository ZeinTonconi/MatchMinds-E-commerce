import {  useRef } from "react";
import { useAuth } from "../App";


export const LoginForm = () => {

    const email = useRef();
    const password = useRef();

    const authService = useAuth();    


    return (
        <div>
            <input className="rounded-md border-0 py-1.5 pl-7 pr-20 mr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Email"
                    ref={email}/>
            <input className=" rounded-md border-0 py-1.5 pl-7 pr-20 mr-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Password"
                    ref={password}/>
            <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
                    onClick={() => {
                            authService.authService.loginService(email,password)
                            authService.updateAuthState();
                        }}>
                Login
            </button>
        </div>
    )
}

export default LoginForm