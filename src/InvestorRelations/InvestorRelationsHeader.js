import "./InvestorRelations.css";
import netflixSVGTag from "../homepage/netflixSvg.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass,faXmark,faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

// console.log(window.screen.availWidth);
function InvestorRelationsHeader()
{
    let[accordionNumber,setAccordionNumber]=useState(0);
    let[inputVisibility,setInputVisibility]=useState(false);
    let[headerColor,setHeaderColor]=useState(false);
    let[responsiveNavbar,setResponsiveNavbar]=useState(false);
    let[forSVG,setForSVG]=useState(false);

    function handleHover(number)
    {
        if(window.screen.availWidth>1120)
        {
            setAccordionNumber(number);
            return;
        }
    }

    function handleAccordionNumber(number)
    {
        if(accordionNumber==number)
        {
            setAccordionNumber(0);
            return;
        }
        setAccordionNumber(number);
    }

    function handleInputVisibility()
    {
        if(window.screen.availWidth<1120&&inputVisibility==false)
        {
            setForSVG(true);
        }
        setInputVisibility(true);
    }

    return(
        <>
        <nav className="investor-relations-navbar"  >
         {  (!forSVG)? <div className="d-flex flex-row align-items-end investor-relations-netflix-svg-container" style={{gap:"12px"}} onMouseOver={()=>{handleHover(0)}}  onClick={()=>{setAccordionNumber(0)}}>
            <img src={netflixSVGTag} className="investor-relations-netflix-svg-tag"/>
            <h5 className="fw-bold investor-relation-svg-H5">INVESTORS</h5>
            </div>:null}

          { (!inputVisibility)? <div className={(responsiveNavbar)?"investor-navbar-accordion slideRIght":"investor-navbar-accordion"}>

          <FontAwesomeIcon icon={faXmark} style={{color: "grey",cursor:"pointer",height:"20px",fontWeight:"bold",display:"none"}} className="accordion-close"  onClick={()=>{setResponsiveNavbar(false)}}/>

              
                <div className="inv-acc-q-one dropdown-toggle accor-hvr"  onMouseOver={()=>{handleHover(1)}} onClick={()=>{handleAccordionNumber(1)}}>OVERVIEW</div>
              { (accordionNumber==1)?<div className="inv-acc-ans-one" >
                <a href="#" className="accor-hvr text-decoration-none text-dark">Profile</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Long-Term View</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Top Investor Questions</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Content Accounting Overview</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Netflix Culture</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">About Netflix</a>
                </div>:null}

                <div className="inv-acc-q-two dropdown-toggle accor-hvr"  onMouseOver={()=>{handleHover(2)}} onClick={()=>{handleAccordionNumber(2)}}>FINANCIALS</div>
               {(accordionNumber==2)? <div className="inv-acc-ans-two">
                <a href="#" className="accor-hvr text-decoration-none text-dark">Quarterly Earnings</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Financial Statements</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Annual Reports & Proxies</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">SEC Filings</a>
                </div>:null}

                <div className="inv-acc-q-three dropdown-toggle accor-hvr"  onMouseOver={()=>{handleHover(3)}} onClick={()=>{handleAccordionNumber(3)}}>NEWS & EVENTS</div>
               { (accordionNumber==3)?<div className="inv-acc-ans-three">
                <a href="#" className="accor-hvr text-decoration-none text-dark">Financial Releases</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Investor Events</a>
                </div>:null}

                <div className="inv-acc-q-four dropdown-toggle accor-hvr"  onMouseOver={()=>{handleHover(4)}} onClick={()=>{handleAccordionNumber(4)}}>STOCK INFO</div>
               { (accordionNumber==4) ? <div className="inv-acc-ans-four">
                <a href="#" className="accor-hvr text-decoration-none text-dark">Stock Quote</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Stock Chart</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Historical Stock Quote</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Investment Calculator</a>
                </div>:null}

                <div className="inv-acc-q-five dropdown-toggle accor-hvr"  onMouseOver={()=>{handleHover(5)}} onClick={()=>{handleAccordionNumber(5)}}>Environmental, Social & Governance</div>
              { (accordionNumber==5)? <div className="inv-acc-ans-five">  
                <a href="#" className="accor-hvr text-decoration-none text-dark">Leadership & Directors</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">ESG Information</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Governance Docs</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Committee Membership</a>
                </div>:null}

                <div className="inv-acc-q-six dropdown-toggle accor-hvr"  onMouseOver={()=>{handleHover(6)}} onClick={()=>{handleAccordionNumber(6)}}>RESOURCES</div>
              { (accordionNumber==6)? <div className="inv-acc-ans-six">  
                <a href="#" className="accor-hvr text-decoration-none text-dark"> Newsroom</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Email Alerts</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Investor Contacts</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark">Social Media Disclosure</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark"> EEO-1 Reports</a>
                <a href="#" className="accor-hvr text-decoration-none text-dark"> Political Activity Disclosures</a>
                </div>:null}


            </div>:null}

            <div className="investor-search-text-close-container">
            <FontAwesomeIcon icon={faMagnifyingGlass} style={{color: "#ffffff",cursor:"pointer",height:"18px",fontWeight:"bold"}} className="font-awesome-search-for-nav" onClick={()=>{handleInputVisibility()}}/>
            <input type="text" placeholder="SEARCH BY KEYWORD" className={(inputVisibility)?"investor-nav-search-text":"investor-nav-search-text widthIsZero" }/>
            <FontAwesomeIcon icon={faXmark} style={{color: "#fcfcfc",cursor:"pointer",height:"20px",fontWeight:"bold"}}  className={(inputVisibility)?"font-awespme-close-for-nav":"font-awespme-close-for-nav widthIsZero"} onClick={()=>{setInputVisibility(false); setForSVG(false)}}/>
            <FontAwesomeIcon icon={faCircleHalfStroke} style={{color: "#616161",cursor:"pointer",order:"4"}} className={(headerColor)?"change-header-color":""} onClick={()=>{setHeaderColor(!headerColor)}}/>
            </div>

           { (!inputVisibility)? <FontAwesomeIcon icon={faBars} onClick={()=>{setResponsiveNavbar(true)}} style={{color: "#fcfcfc",backgroundColor:" rgb(29, 29, 29)",borderLeft:"8px solid red",padding:"1em"}} className="investor-navToggle" />:null}
        </nav>

        <header className="investor-relations-header" onMouseOver={()=>{handleHover(0)}}  onClick={()=>{setAccordionNumber(0)}}>
            <div className="investor-header-main-container">
                <div className={(headerColor)?"inverstor-header-subcontainer-two" : "inverstor-header-subcontainer-one"} >
                        <div className="investor-header-inner-left-content">
                            <h1 className="text-white fw-bolder inhe-h-one" style={{fontSize:"3.2em"}}>Company Profile</h1>
                            <p className="text-white mt-3 inhe-p-one" style={{lineHeight:"25px"}} >Netflix is one of the world's leading entertainment services with over 238 million paid memberships in over 190 countries enjoying TV series, films and games across a wide variety of genres and languages. Members can play, pause and resume watching as much as they want, anytime, anywhere, and can change their plans at any time.</p>
                        </div>
                </div>
                <div className="investor-header-red-border-class"></div>
                <div className="inverstor-header-subcontainer-two">
                <div className="investor-header-inner-right-content">
                            <span className="text-white  fw-bold" style={{fontSize:"1.2em"}}>NASDAQ: NFLX</span>
                            <h1 className="text-white fw-bold mt-2" style={{fontSize:"3em",marginLeft:"-0.6em"}}>$412.24</h1>
                            <p className="text-white fw-bold" style={{fontSize:"1.2em"}}>-22.45 ( -5.17% )</p>
                            <span className="text-white  fw-bold"style={{fontSize:"1.2em",marginLeft:"-0.5em"}}>VOLUMN: 3,245</span>
                            <p className="fw-bold mt-2" style={{fontSize:"0.8em",color:"grey",lineHeight:"25px",marginLeft:"-2em"}}>Pricing delayed by 20 minutes <br/>Last Updated 09/13/23 4:00 PM</p>

                        </div>
                    </div>
            </div>

        </header>
        </>
    )
}
export default InvestorRelationsHeader;