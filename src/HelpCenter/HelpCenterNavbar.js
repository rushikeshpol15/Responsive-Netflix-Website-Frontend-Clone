import "./helpCenter.css";
import NetflixSvg from "../homepage/netflixSvg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function HelpCenterNavbar(props)
{
    let nav=useNavigate();
    return(
        <>
        <header className="help-header">
        <nav className="help-navbar d-flex justify-content-between">
        <img src={NetflixSvg} className="netflix-svg" onClick={()=>{nav('/')}}/>

        <div className="Help-navbar-signIn-div ">
            <a onClick={()=>{nav('/JoinNowMain')}} className="btn text-white a-btn ">Join Netflix</a>
            <a onClick={()=>{nav('/Account')}} className="btn text-white a-signIn-btn ">Sign In</a>
        </div>

        </nav>
        {props.search ?
             <div className="Help-container mt-3 m-sm-auto ">
             <div className="Help-row">
                 <h2 className="text-white text-sm-center fw-bolder ">Help Center</h2>
             <div className="col m-1 m-sm-auto bg-white">
             <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#111212", width:"3%",height:"20px",paddingLeft:"4px"}} />
                 <input type="text" placeholder="What do you need help with?" className="Help-input" />
             </div>
             </div>
         </div> 
         : null
        }
       
        </header>
      
        </>
    )
}
export default HelpCenterNavbar;
