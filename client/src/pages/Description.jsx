import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { NavLink } from "react-router-dom";

export function Description(){
    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="space-y-5 flex flex-col justify-center items-center">
                <h1 className="text-x1 font-semibold">What are you seing? pelao</h1>
                <NavLink to='/'>
                <button className="bg-gray-800 text-white px-5 py-2 rounded-m drop-shadow-x1 flex items-center space-x-2">
                    <span>Back to the shop</span>
                    <BsArrowLeft/>
                </button>
                </NavLink>
            </div>
        </div>
    )
}