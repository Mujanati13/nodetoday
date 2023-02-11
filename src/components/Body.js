import { React, useState } from 'react'
import google from '../pictures/google.svg'
import logo from '../pictures/logo1.svg'
import line from '../pictures/line-row.svg'


function Body() {

    const [getText, setText] = useState("Get Start");
    const [showtab, setshowtab] = useState(false);

    const BtnHoverHandle = (event) => {
        setText("")
    }
    const BtnHoverHandleLeave = (event) => {
        setText("Get Start")
    }

    return (
        <>
            <div className='flex row items-center m-8 ml-20'>
                <div className='w-96'>
                    <p className='text-3xl font-normal flex items-end'>
                        Writing and sharing information is one of the
                        most humane act ever you can do
                        <img className='relative right-40' src={line} alt="line" />
                    </p>
                    <p className='mt-8 text-xl font-medium first-letter:uppercase'>
                        Uncredible <span className='bg-yellow-200 rounded-xl'>Fast</span> & <span className='bg-green-200 rounded-xl'>Secure</span> User Experience
                    </p>
                  
                        <button onMouseEnter={BtnHoverHandle} onMouseLeave={BtnHoverHandleLeave} className='transition-all flex row items-center w-44 pl-5  pr-5 pb-2 p-1 h-10 bg-gray-800 text-white text-2xl font-semibold mt-8 rounded-3xl text-center' >
                            {getText}
                            <img className='ml-3 w-5 mt-1' src={google} alt="google" />
                        </button>
                </div>
                <div className='text-center'>
                    <img src={logo} alt='logo' className='ml-72' />
                </div>
            </div>
        </>
    )
}

export default Body