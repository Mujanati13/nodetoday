import React  from 'react';
import  ReactDOM  from 'react-dom';
import Head from './/components/Head'
import Body from './/components/Body'
import Footer from './components/Footer'
import {checkCookie , SetCookies , RetrieveCookies} from './Auth/cookies'
import CookiesNotify from './components/Notifications/cookies';
import {Route , Routes , BrowserRouter} from'react-router-dom'
import Article from './components/article/index';

function App(){
    var bool = checkCookie('authClient');
    return (
        <div>
            <Head />
            <Body />
            {(bool == "true" ? "" :  <CookiesNotify />)}
        </div>
    )
}


function DIsplayWithRouter(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />} />
                <Route path='/Articles' element={<Article />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render(<DIsplayWithRouter /> , document.getElementById('root'))
