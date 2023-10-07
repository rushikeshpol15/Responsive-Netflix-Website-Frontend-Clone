import React from 'react';
import ReactDom from 'react-dom';
import  "./homepage.css";
// import NetflixSvg from "./Netflix-Logo.wine.svg";
import NetflixSvg from "./netflixSvg.svg";
import SelectComponent from './SelectComponent';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import SignInInput from './SignInInputComponent';
import { useNavigate } from 'react-router-dom';


function Header(props)
{
        let Navigate=useNavigate();

    return(
        <>
        <header className='header pb-4'>

        <nav className='d-flex justify-content-between align-items-center py-2 py-sm-4 homepage-navbar '>

            <img src={NetflixSvg}  className='netflix-svg-img '/>

            <div className='nav-last-div me-sm-5 d-inline-flex align-items-center  '>
            <SelectComponent/>
            <a onClick={()=>{Navigate('/Account')}}  className='sign-in-button ms-sm-4 ms-2 text-decoration-none '>Sign In</a>
            </div>
       
        </nav>

        <div className='center-content '>
        <h1 className='lh-2'>Unlimited movies, TV shows and more</h1>
        <h2>Watch anywhere. Cancel anytime.</h2>
        <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
        <SignInInput handleEmail={props.handleEmail}/>
        </div>
        </header>
        </>
    )
}
export default Header;
