import React, { useState } from 'react'
import '../output.css'
import logo from '../pictures/logo1.svg'
import down from '../pictures/down.svg'
import { Link } from 'react-router-dom'

function Head() {

    var [display, setDisplay] = useState("none");
    var [getrotate, setRotate] = useState("rotate-180 ml-2");

    var styel = { display: display, width: "100px", "text-algin": "center", position: "absolute", left: "360px", top: "80px", height: "35px", transition: "all 700ms" }

    var handleDisplay = () => {
        setDisplay((display == "none" ? "block" : "none"));
        setRotate((getrotate == "rotate-180 ml-2" ? "rotate-360 ml-2" : "rotate-180 ml-2"))
    }

    return (
        <>
            <div className=''>
                <div className='flex row items-center m-8 ml-20'>
                    <img src={logo} alt='logo' className="w-24 relative top-1" />
                    <ul className='flex items-end'>
                        <li className='relative'><span className='font-medium text-2xl'>Node </span> <span className='opacity-50 text-medium font-medium'>today</span></li>
                        <li onClick={handleDisplay} className='text-lg font-normal opacity-80 ml-20 flex cursor-pointer'>Quick start <img src={down} alt='down' className={getrotate} /> </li>
                        <div className='w-12 pt-0.5 pb-0.5 h-6 text-purple-500 bg-gray-300 rounded-md font-lg text-center text-sm font-semibold ml-4'>BETA</div>
                    </ul>
                </div>
                <Link to='/Articles'>
                    <span style={styel} className='absolute left-80 cursor-pointer bottom-6 shadow-md rounded-xl pl-4 pr-4 p-1 text-black font-semibold text-lg bg-white hover:bg-slate-300'>Article</span>  
                </Link>
            </div>
            <div className='w-full pt-4 pb-4 bg-slate-200'></div>
        </>
    )
}


export default Head