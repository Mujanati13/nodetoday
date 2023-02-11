import {React} from 'react'
import footer from '../pictures/footer.svg'


export default function Footer(){
    return(
        <div className='mt-20'>
            <img src={footer} alt='footer' className='w-full '/>
        </div>
    )
}