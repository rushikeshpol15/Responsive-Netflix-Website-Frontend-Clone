import "./JoinNowOne.css";
import netflixSVG from "../homepage/netflixSvg.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function JoinNowOneHeader(props)
{
    let[NavigateToAccount,setNavigateToAccount]=useState(false);

    useEffect(()=>{
        if(props.SignInOrOut=="Sign In")
        {
            setNavigateToAccount(true);
        }
    })

    let Navigate=useNavigate();
    
    function handleSignInOrSignOut()
    {
        if(NavigateToAccount)
        {
            Navigate('/Account');
        }
        else{
            Navigate('/');
        }
    }
    
    return(
        <>
        <header className="Join-now-one-header">
            <img src={netflixSVG} alt="img" className="join-now-one-netflix-svg" onClick={()=>{Navigate('/')}}/>
            <a  onClick={()=>{handleSignInOrSignOut()}} className="join-now-one-header-signIN text-decoration-none text-dark fw-bold join-now-link-hover" title="sign in to netflix account" style={{fontSize:"1.15em"}}>
                {props.SignInOrOut}</a>
        </header>
        </>
    )
}
export default JoinNowOneHeader;
