import "./InvestorRelations.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi,faMicrophone ,faFilePen, faFileExcel, faFileLines, faUser , faSignal} from "@fortawesome/free-solid-svg-icons";
function InvestorRelationsSection()
{
    return(
        <>
        <section className="investor-relations-section">

            <div className="investor-relations-section-one-container">

                <div className="investor-section-one-subcontainer">

                    <div className="d-flex justify-content-between align-items-center">
                        <h2 className="fw-bold inves-h-two">Investor Events</h2>
                        <FontAwesomeIcon icon={faWifi} size="xl" style={{color: "#b40808",transform:"rotate(45deg)",fontSize:"1.7em",fontWeight:"bolder"}} />
                    </div>

                    <div className="investor-relations-section-one-card shadow i-r-s-one">
                        
                        <div className="mb-2">
                            <a href="#" style={{fontSize:"1.5em"}} className="inv-sec-one-anch-tag text-decoration-none text-dark HOVER_RED investor-list-anchorTag">
                            Netflix CFO to Present at the BofA Media, Communications & Entertainment Conference
                            </a>
                        </div>
                        <span className="fw-bold fo-aw-smal-txt">Sep 13, 202308:20 AM PT</span> <br/>
                        <div className="mt-3 HOVER_RED">
                        <FontAwesomeIcon icon={faMicrophone} style={{color: "#d40808",marginRight:"0.5em"}} />
                        Webcast
                        </div>

                        <div className="mt-4 mb-2">
                            <a href="#" style={{fontSize:"1.5em"}} className="inv-sec-one-anch-tag text-decoration-none text-dark HOVER_RED  investor-list-anchorTag">
                            Netflix co-CEO to Present at the Goldman Sachs Communacopia + Technology Conference
                            </a>
                        </div>
                        <span className="fw-bold  fo-aw-smal-txt">Sep 5, 202301:05 PM PT</span> <br/>
                     
                       <div className="d-flex mt-3 webcast-trnascript-container" style={{gap:"1em",marginBottom:"3em"}}>
                            <div className="fo-aw-smal-txt HOVER_RED">
                                <FontAwesomeIcon icon={faMicrophone} style={{color: "#d40808",marginRight:"0.5em"}} />
                                Webcast
                            </div>
                            <div style={{borderLeft:"1px solid grey",paddingLeft:"0.7em"}} className=" fo-aw-smal-txt HOVER_RED">
                                <img src="https://www.adobe.com/content/dam/cc/en/legal/images/badges/PDF_24.png" alt="img" width={"18px"} height={"22px"} style={{marginRight:"5px"}}/>
                                Transcript
                            </div>
                        </div>
                        <a href="#" style={{color:"rgb(202, 11, 11)",fontSize:"1.15em"}} className="text-decoration-none fw-bold">All Events &gt;</a>


                    </div>

                </div>

                <div className="investor-section-two-subcontainer">
                <h2 className="fw-bold inves-h-two">Investor Kit</h2>
                    <div className="investor-relations-section-one-card shadow">

                        <ul className="list-group list-group-flush">

                            <li className="list-group-item investor-list-padding">
                                <a href="#"  className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark" style={{fontSize:"1.5em"}}>Long Term View</a>
                            </li>

                            <li className="list-group-item investor-list-padding">
                            <a href="#"  className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark" style={{fontSize:"1.5em"}}>Top Investor Questions</a>
                            </li>

                            <li className="list-group-item investor-list-padding">
                                <a href="#" className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark" style={{fontSize:"1.5em"}}>Content Accounting Overview</a>
                            </li>

                            <li className="list-group-item investor-list-padding">
                                <a href="#" className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark " style={{fontSize:"1.5em"}}>Netflix Culture</a>
                            </li>

                            <li className="list-group-item investor-list-padding">
                                <a href="#" className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark" style={{fontSize:"1.5em"}}>Netflix Approach to Corporate Governance</a>
                            </li>

                            <li className="list-group-item investor-list-padding">
                                <a href="#" className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark" style={{fontSize:"1.5em"}}>Netflix ESG Information</a>
                            </li>

                            <li className="list-group-item investor-list-padding">
                                <a href="#" className="inv-sec-one-anch-tag fw-bold HOVER_RED investor-list-anchorTag text-decoration-none text-dark" style={{fontSize:"1.5em"}}>WeAreNetflix Podcast</a>
                            </li>
                            {/* <hr/> */}
                            <li></li>
                        </ul>
                    </div>
                
                </div>
            </div>

            <div className="investor-section-three-card-section ">
                   <div className="three-card-bg-png"></div>

                    <div className="d-flex justify-content-between  align-items-center">
                        <span className="temp-span"></span>
                    <h2 className="fw-bold inves-h-two">Financial Releases and Updates</h2>
                    <FontAwesomeIcon icon={faWifi} size="xl" style={{color: "white",transform:"rotate(45deg)",fontSize:"1.7em",fontWeight:"bolder"}} />
                    </div>

                    <div className="three-card-grid-container">
                        <div className="shadow i-r-s-one pt-5 pb-3 px-4 d-inline-flex flex-column bg-white" style={{gap:"0.5em"}}>
                            <a href="#" className="text-decoration-none inv-sec-one-anch-tag " style={{color:"red",fontSize:"1.5em"}}>Netflix to Announce Third Quarter 2023 Financial Results</a>
                            <span className="fw-bold fo-aw-smal-txt" >Sep 15, 2023</span>
                        </div>

                        <div className="shadow i-r-s-one pt-5 pb-3 px-4 bg-white  d-inline-flex flex-column" style={{gap:"0.5em"}}>
                            <a href="#" className="text-decoration-none inv-sec-one-anch-tag " style={{color:"red",fontSize:"1.5em"}}>Netflix Reappoints Ambassador Susan E. Rice to its Board of Directors</a>
                            <span className="fw-bold fo-aw-smal-txt ">Sep 8, 2023</span>
                        </div>

                        <div className="shadow i-r-s-one pt-5 pb-3 px-4 bg-white d-inline-flex flex-column" style={{gap:"0.5m"}}>
                            <a href="#" className="text-decoration-none inv-sec-one-anch-tag " style={{color:"red",fontSize:"1.5em"}}>Netflix CFO to Present at the BofA Media, Communications & Entertainment Conference</a>
                            <span className="fw-bold fo-aw-smal-txt ">Sep 6, 2023</span>
                        </div>

                    </div>

                    <div className="text-center" style={{marginTop:"3em"}}>
                    <a href="#" className="investor-three-card-all-release-btn">ALL RELEASES &nbsp; &gt;</a>
                    </div>
                   

            </div>

            <div className="quarterly-earnings-section">
                <h2 className="fw-bold inves-h-two text-white text-center mb-5" >Quarterly Earnings</h2>
                <h3 className="text-white text-center">Second-Quarter 2023 Financial Results</h3>

                <div className="investor-earning-grid-container">

                    <div className="text-white HOVER_RED  d-inline-flex align-items-center fo-aw-smal-txt">
                    <FontAwesomeIcon icon={faMicrophone} style={{color: "#d70909",marginRight:"12px",width:"25px",height:"55px"}} />
                    Video Interview
                    </div>

                    <div className="text-white HOVER_RED d-inline-flex align-items-center fo-aw-smal-txt">
                    <FontAwesomeIcon icon={faFilePen} style={{color: "#e2030f",marginRight:"12px",width:"30px",height:"55px"}} />
                    Video Interview
                    </div>

                    <div className="text-white HOVER_RED d-inline-flex align-items-center fo-aw-smal-txt">
                    <FontAwesomeIcon icon={faFileExcel} style={{color: "#dc091e",marginRight:"12px",width:"20px",height:"55px"}} />
                    Financial Statements
                    </div>

                    <div className="text-white HOVER_RED d-inline-flex align-items-center fo-aw-smal-txt">
                    <FontAwesomeIcon icon={faFilePen} style={{color: "#e2030f",marginRight:"12px",width:"30px",height:"55px"}} />
                    Transcript
                    </div>

                </div>
                
                <div className="text-center" style={{marginTop:"2em",marginBottom:"2em"}}>
                    <a href="#" className="investor-three-card-all-release-btn">ALL QUARTERS &nbsp; &gt;</a>
                </div>

            </div>

            <div className="investor-last-section">

                        <div className="investor-last-section-container">

                            <div className="d-inline-flex justify-content-center align-items-center text-white  inv-last-sec-pad investor-last-section-subone" style={{gap:"18px"}}>Quick Links</div>

                            <div className="d-inline-flex flex-column align-items-center text-center HOVER_RED inv-last-sec-pad" style={{gap:"18px"}}>
                            <FontAwesomeIcon icon={faFileLines} style={{color: "#d30d0d", width:"50px",height:"60px"}} />
                            Annual Reports & Proxies
                            </div>

                            <div className="d-inline-flex flex-column align-items-center HOVER_RED inv-last-sec-pad" style={{gap:"18px"}}>
                            <FontAwesomeIcon icon={faFileExcel} style={{color: "#cf0707", width:"50px",height:"60px"}} />
                            SEC Filings
                            </div>

                            <div className="d-inline-flex flex-column align-items-center HOVER_RED inv-last-sec-pad" style={{gap:"18px"}}>
                            <FontAwesomeIcon icon={faSignal} style={{color: "#e11414", width:"50px",height:"60px"}} />
                            Stock Information
                            </div>

                            <div className="d-inline-flex flex-column align-items-center HOVER_RED inv-last-sec-pad" style={{gap:"18px"}}>
                            <FontAwesomeIcon icon={faUser} style={{color: "#da1010", width:"50px",height:"60px"}} />
                            IR Contacts
                            </div>


                        </div>
            </div>
        </section>
        </>
    )
}
export default InvestorRelationsSection;