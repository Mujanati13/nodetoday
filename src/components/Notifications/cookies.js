import react, { useState } from 'react'
import line from '../../pictures/line-row.svg'
import cookies from '../../pictures/cookies.svg'
import { SetCookies } from '../../Auth/cookies';


function CookiesNotify(){
    var [display , setDisplay] = useState("none");
    var style = {display : display}

    const handleDisplay = ()=>{
        setDisplay("none");
        SetCookies("true" , "authClient");
    }

    return(
        <div style={style}>
            <div className='w-full h-full text-center bg-gray-900 absolute top-0 bottom-0 opacity-80'></div>
            <div className='z-20 w-96 p-4 shadow-lg h-36 pt-6 rounded-3xl bg-gray-400 absolute top-44 bottom-0 left-56'>
                <p className='font-bold flex items-center text-xl'>
                    cookies <img className='w-4 relative top-0.5 ml-2 text-green-700' src={cookies} alt="cookies" />
                </p>
                <p className='font-light text-white text-2xl'>
                    we use cookies to improve the UX 
                </p>
                <p onClick={handleDisplay} className='cursor-pointer mt-2 font-normal flex items-center text-lg text-green-900'>
                    Accept <img src={line} alt="line"  className='w-6 relative top-0.5 ml-2'/>
                </p>
            </div>
        </div>
    )
}


export default CookiesNotify