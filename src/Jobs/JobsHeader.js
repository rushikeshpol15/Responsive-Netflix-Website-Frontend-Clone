import NetflixSVG from "../homepage/netflixSvg.svg";
import "./Jobs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faFacebook ,faSquareTwitter,faSquareInstagram,faYoutube,faLinkedin} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function JobsHeader()
{
    let[responsive,setResponsive]=useState(false);
    return(
        <>
        <header className="Jobs-header">
            <video muted loop autoPlay playsInline id="Jobs-header-video" >
                <source src="https://videos.ctfassets.net/i5wc420v2vd1/3ST3WLEGpWUu2Ymg8WoEMs/06ee7becf93cce3083b115d2feb63a8b/Netflix-MainHero-V2.mp4" type="video/mp4"/>
            </video>
            <nav className="Jobs-navbar">

            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",cursor:"pointer"}} className="fontAwesome-navbar-icon" onClick={()=>{setResponsive(true)}}/>

                <div className="d-inline-flex align-items-center flex-column flex-lg-row">
                <img src={NetflixSVG} className="Jobs-netflixSVG" alt="Netflix"/>
                <a href="#" className="text-white fw-bold text-decoration-none ms-lg-3 mt-1 mt-lg-0 a-Jobs">JOBS</a>
                </div>

                <div className={(responsive)?"nav-sidebar-elements translate":"nav-sidebar-elements"}>

                <div className="d-flex netflix-sidebar-sVG-container">     
                <div className="d-inline-flex align-items-center netflix-sidebar-sVG">
                <img src={NetflixSVG} className="Jobs-netflixSVG" alt="Netflix"/>
                <a href="#" className="text-dark fw-bold text-decoration-none">JOBS</a>
                </div>
                    <button className="btn-close align-self-start" style={{width:"16px"}} onClick={()=>{setResponsive(false)}}></button>
                </div>
              
                 <a href="#" className="nav-sidebar-links text-decoration-none text-white">TEAMS</a>
                 <a href="#" className="nav-sidebar-links text-decoration-none text-white">LOCATIONS</a>
                 <div className="nav-sidebar-div-one">
                 <span  className="nav-sidebar-links dropdown-toggle text-white">EMERGING TALENT</span>
                    <div className="nav-sidebar-span-first-div d-flex flex-column ">
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">NEW GRADES</a>
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">INTERNS</a>

                    </div>
                 </div>
                 <div className="nav-sidebar-div-two">
                 <span  className="nav-sidebar-links  dropdown-toggle text-white">WEARENETFLIX</span>
                    <div className="nav-sidebar-span-second-div d-flex flex-column ">
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">NETFLIX CULTURE MEMO</a>
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">WORK LIFE PHILOSOPHY</a>
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">INCLUSION & DIVERSITY</a>
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">VIDEO</a>
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">PODCAST</a>
                        <a href="#" className="nav-sidebar-links text-decoration-none text-dark">BLOG</a>
                    </div>
                 </div>

                    <div className="fontAwesome-sidebar-navbar-fb">                      
                    <FontAwesomeIcon icon={faFacebook} style={{color: "#000000",width:"30px",height:"40px"}}  className="fontAwesomeHover" /> 
                      <FontAwesomeIcon icon={faSquareTwitter} style={{color: "#0a0a0a",width:"30px",height:"34px"}} className="fontAwesomeHover" />   
                      <FontAwesomeIcon icon={faSquareInstagram} style={{color: "#080808",width:"30px",height:"34px"}} className="fontAwesomeHover" /> 
                      <FontAwesomeIcon icon={faYoutube} style={{color: "#000000",width:"30px",height:"40px"}} className="fontAwesomeHover" />  
                    </div>


                </div>

                <div className="d-flex align-items-center" style={{gap:"10px",cursor:"pointer"}}>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#f4f5f5", height:"28px"}} />
                <span className="Navbar-Search-Job-text text-white fw-bold">Search Jobs</span>
                </div>

            </nav>


            <div className="Jobs-header-center-content">
                <h1 className="text-white Jobs-header-center-content-h1">A great workplace combines exceptional colleagues and hard problems.</h1>
                <div className="Jobs-header-input-container d-flex align-items-center">
                <input type="text" className="Jobs-header-input" placeholder="Search Jobs by keyword"/>
                <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#050505",width:'70px',cursor:"pointer"}} />
                </div>
            </div>
        </header>
        </>
    )
}

export default JobsHeader;