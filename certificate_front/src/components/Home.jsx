import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { TiFlash } from "react-icons/ti";
import { Link } from "react-router-dom";

export function Navbar() {
    const [open, setOpen] = useState(true);
    const menus = [
        {name : "dashboard",link : "/",icon : ""},
        {name : "user",link : "/",icon : ""},
        {name : "login",link : "/",icon : ""}
    ]

    return (
        <>
            <div className="flex ">
                <div className={`${open ? "w-72" : "w-20"} bg-teal-500 min-h-screen p-5 relative`}>
                    <h1 className="text-2xl capitalize text-center flex items-center"><TiFlash className="text-3xl mx-2 rounded-full bg-white" />sidebar</h1>
                    <FaArrowLeft className={`bg-white p-2 border border-black text-3xl rounded-full -right-3 top-7 cursor-pointer absolute ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
                    <div className="mt-5 text-xl relative flex flex-col">
                        {menus ?. map((menu,i)=>(
                            <Link to={menu?.link} key={i}>
                                <div>{React.createElement(menu?.icon,{size :" 20"})}</div>
                                <h2>{menu?.name}</h2>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="text-center w-full bg-gray-400">
                    <h1 className="text-3xl capitalize m-4">maincontent</h1>
                </div>
            </div >
        </>
    );
}