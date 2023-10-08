import "./WayToWatch.css";
import netflixSVG from "../homepage/netflixSvg.svg";
import { useNavigate } from "react-router-dom";

function WayToWatchHeader()
{
    let navigate=useNavigate();

    return(
        <>
         

        <header className="way-to-watch-header">
        <nav className="way-to-watch-navbar">
            <img src={netflixSVG} className="way-to-watch-netflix-svg" alt="img" onClick={()=>{navigate('/')}}/>

                <div className="way-navbar-sign-in-sign-up-container">
                <a className="text-decoration-none fw-bold p-2 " style={{color:"red",marginRight:"15px",fontSize:"0.9em",cursor:"pointer"}}  onClick={()=>{navigate('/Account')}} >Sign In</a>
                <a className="text-decoration-none text-white fw-bold p-2" onClick={()=>{navigate('/JoinNowMain')}}  style={{backgroundColor:" rgb(226, 15, 15)",borderRadius:"3px",fontSize:"0.9em",cursor:"pointer"}} >Sign Up</a>
                </div>
               
            </nav>   
                <div className="way-to-watch-header-center-content">
                    <h1 className="text-white m-auto fw-bolder way-to-watch-center-content-header" >Connect to Netflix using your favorite devices.</h1>
                </div>
        </header>
        </>
    )
}
export default WayToWatchHeader;
