import "./OnlyOnNetflix.css";
import netflixSVG from "../homepage/netflixSvg.svg";
import { useNavigate } from "react-router-dom";

function OnlyOnNetflixHeader()
{
    let NaviGate=useNavigate();

    return(
        <>
        <header className="only-on-netflix-header">
            <img src={netflixSVG} alt="img" className="only-on-netflix-header-svg" onClick={()=>{NaviGate('/')}}/>

            <div className="only-on-netflix-signIn-JoinNow-container">
                <span className="Unlimited-shows-span-text text-white">UNLIMITED TV SHOWS & MOVIES</span>
                <a onClick={()=>{NaviGate('/JoinNowMain')}}  className="Only-on-JoinNow-box text-white text-decoration-none">JOIN NOW</a>
                <a onClick={()=>{NaviGate('/Account')}} className="Only-on-SignIn-box text-white text-decoration-none">SIGN IN</a>
            </div>
        </header>
        </>
    )
}
export default OnlyOnNetflixHeader;
