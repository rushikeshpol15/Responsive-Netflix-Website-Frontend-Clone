import { useNavigate } from "react-router-dom";
import nVSG from "../homepage/netflixSvg.svg";
import { useState } from "react";

function HelpCenterFooter(props)
{
    let[checkSwitch,setCheckSwitch]=useState(false);
    
    let NaviGation=useNavigate();
    
    return(
        <>
         <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-lg">
            <div className="modal-content">
            <div className="modal-header ">
                <div className="IMG-privacy-text d-flex flex-column flex-sm-row" style={{gap:"20px"}}>
                <img src={nVSG} alt="img" style={{width:"90px"}}/>
                <h4 className="fw-bold m-auto privacy-preference-center">Privacy Preference Center</h4>
                </div>
               
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                    <div className="d-flex  align-items-start GAP" style={{gap:"15px"}}>
                        <div className="nav NA flex-column nav-tabs me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            <button className="nav-link cookie-nav-link active fw-bold text-dark" id="v-pills-home-tab" data-bs-toggle="tab" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true"  style={{fontSize:"0.9em",textAlign:"start",marginBottom:"0.3em"}}>General Description</button>
                            <button className="nav-link cookie-nav-link fw-bold text-dark" id="v-pills-profile-tab" data-bs-toggle="tab" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false"  style={{fontSize:"0.9em",textAlign:"start",marginBottom:"0.3em"}}>Essential Cookies</button>
                            <button className="nav-link cookie-nav-link fw-bold text-dark" id="v-pills-messages-tab" data-bs-toggle="tab" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false"  style={{fontSize:"0.9em",textAlign:"start",marginBottom:"0.3em"}}>First Party Performance and Functionality Cookies</button>
                            <button className="nav-link cookie-nav-link fw-bold text-dark" id="v-pills-settings-tab" data-bs-toggle="tab" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"  style={{fontSize:"0.9em",textAlign:"start",marginBottom:"0.3em"}}>Third Party Performance and Functionality Cookies</button>
                            <button className="nav-link cookie-nav-link fw-bold text-dark" id="v-pills-settings-tab" data-bs-toggle="tab" data-bs-target="#v-pills-ad" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false"  style={{fontSize:"0.9em",textAlign:"start",marginBottom:"0.3em"}}>Advertising Cookies</button>

                        </div>
                        <div className="tab-content T-C" id="v-pills-tabContent" style={{width:"90%"}}>
                          
                            <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                <strong>General Description</strong>
                                <p  style={{fontSize:"0.85em",marginTop:"1em"}}>This cookie tool will help you understand who is using cookies to collect information from your device, for what purposes they use the information, and how you can control the use of cookies for non-essential activities.</p>
                                <p style={{fontSize:"0.85em"}}>Netflix supports the Self-Regulatory Principles for Online Behavioral Advertising of the Digital Advertising Alliance (DAA), the Digital Advertising Alliance of Canada (DAAC), and the European Interactive Digital Advertising Alliance (EDAA).</p>
                                <p style={{fontSize:"0.85em"}}>If you opt out of advertising cookies, you may still see Netflix ads on other sites, but those ads will not be customized by us or our service providers and we will continue to customize your experience on our website via our use of cookies you have not refused.</p>
                                <p style={{fontSize:"0.85em"}}>Alternatively, privacy settings in most browsers will allow you to prevent your browser from accepting new cookies, have it notify you when you receive a new cookie, or disable cookies altogether. If your browser is set to not accept any cookies, you will not receive Interest-Based Advertising, but your use of the Netflix service may be impaired or unavailable. In addition, if you use our cookie tool to opt-out of certain cookies, your opt-out preferences will be remembered by placing a cookie on your device. It is therefore important that your browser is configured to accept cookies for your preferences to take effect. If you delete or clear your cookies, or if you change which web browser you are using, you will need to set your cookie preferences again.</p>
                                <p style={{fontSize:"0.85em"}}>For more information on our use of cookies, please visit the Cookies and Internet Advertising section of our Privacy Statement.</p>
                                </div>

                            <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">
                                <strong>Essential Cookies</strong>
                                <p style={{fontSize:"0.85em",marginTop:"1em"}}>These cookies are strictly necessary to provide our website or online service. For example, we and our Service Providers may use these cookies to authenticate and identify visitors when they use our websites and applications so we can provide our service to them. They also help us to enforce our Terms of Use, prevent fraud and maintain the security of our services.</p>
                                <p style={{fontSize:"0.85em"}}>Lifespan: Most cookies are session cookies (which are only active until you close your browser) or are cookies which are only active for one day. Some cookies are active for a longer time, ranging from 3 to 12 months. The cookies used to prevent fraud and maintain the security or our services are active for a maximum period of 24 months.</p>
                                </div>

                            <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">
                                <strong>First Party Performance and Functionality Cookies</strong>
                                <p style={{fontSize:"0.85em",marginTop:"1em"}}>These cookies help us to customize and enhance your online experience with Netflix. For example, they help us to remember your preferences and prevent you from needing to re-enter information you previously provided (for example, during member sign up). We also use these cookies to collect information (such as popular pages, conversion rates, viewing patterns, click-through and other information) about our visitors' use of the Netflix service so that we can enhance and customize our website and service and conduct market research. Deletion of these types of cookies may result in limited functionality of our service.</p>
                                <p style={{fontSize:"0.85em"}}>Lifespan: Most cookies are only active for one day. Some cookies are active for a longer time, ranging from 3 to 12 months.</p>
                                </div>

                            <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                                <div className="d-flex justify-content-between">
                                    <strong>Third Party Performance and Functionality Cookies</strong>
                                    <div className="switch-btn-parent" onClick={()=>{setCheckSwitch(!checkSwitch)}} >
                                        <span className={(checkSwitch)?"switch-horizontal horizontal-switched":"switch-horizontal"}></span>
                                        <span className={(checkSwitch)?"switch-circle circle-switched":"switch-circle"}></span>
                                    </div>  
                                </div>
                                <p  style={{fontSize:"0.85em",marginTop:"1em",marginBottom:"1em"}}>These cookies, set by third parties, help us to customize and enhance your online experience with Netflix. The cookies in this category are only set on Tudum (our official fandom site). We use these cookies to provide you experiences hosted by third parties, like displaying social media content. For further information on how these third parties use such cookies, please see the privacy information provided by the third party on their website. Deletion of these types of cookies may result in limited functionality of our service.</p>
                                    <a href="#" style={{fontSize:"0.em8"}} className="text-decoration-none">Cookies Details</a>
                                </div>

                            <div className="tab-pane fade" id="v-pills-ad" role="tabpanel" aria-labelledby="v-pills-settings-tab">
                               <div className="d-flex justify-content-between">
                                    <strong>Advertising Cookies</strong>
                                    <div className="switch-btn-parent" onClick={()=>{setCheckSwitch(!checkSwitch)}} >
                                        <span className={(checkSwitch)?"switch-horizontal horizontal-switched":"switch-horizontal"}></span>
                                        <span className={(checkSwitch)?"switch-circle circle-switched":"switch-circle"}></span>
                                    </div>  
                                </div>
                                <p style={{fontSize:"0.8em",marginTop:"1em"}} >These cookies use information about your use of this and other websites and apps, your response to ads and emails, and to deliver ads that are more relevant to you and for analytics and optimization purposes. These types of ads are called "interest-based advertising" and will be shown to you outside the Netflix domain. Netflix uses contractual and technical measures designed to prevent advertising partners from accessing information regarding specific title selections you make, URLs you land on, or shows you have watched on our service. We do not share information about title selections or your shows you have watched on our service. The advertising cookies associated with our service belong to our advertising partners as listed under cookie details. Please choose your settings for advertising cookies below. If you want to opt out of the advertising cookies across all websites, go here.</p>
                                <a href="#" style={{fontSize:"0.8em"}} className="text-decoration-none">Cookies Details</a>
                                </div>

                        </div>
                    </div>
            </div>
            <div className="modal-footer d-flex justify-content-start">
                <button type="button" className="py-1 px-3 text-white" style={{backgroundColor:"red",border:"none"}} data-bs-dismiss="modal">save settings</button>
            </div>
            </div>
        </div>
        </div> 

        <footer className="help-center-footer">

            {
           ( props.button) ? 
           <>
           
            <div className="d-flex flex-column flex-sm-row align-items-sm-baseline" style={{gap:"20px"}}>
            <h5 className="text-white fw-bolder">Need more help?</h5>
            <button className="btn btn-light text-dark fw-bold px-5 contact-button" style={{borderRadius:"5px"}} onClick={()=>{NaviGation('/ContactUs')}}>Contact Us</button>
        </div>
        <div className="my-4" style={{borderBottom:"1px solid rgb(163, 160, 160)"}}  ></div>
        </>
             :
             null
         }
            
            <div>
                <select className="bg-dark mb-5 text-secondary fw-bold">
                    <option value={"English"}>English</option>
                    <option value={"हिन्दी"}>हिन्दी</option>
                </select>
                <div className="d-flex flex-column mb-4" style={{gap:"20px"}}>
                <a href="/TermsOfUse" className="footer-a text-decoration-none">Terms of Use</a>
                <a href="/Privacy" className="footer-a text-decoration-none">Privacy</a>
                <a href="#staticBackdrop" data-bs-toggle="modal" className="footer-a text-decoration-none">Cookie Preferences</a>
                <a href="/CorporateInformation" className="footer-a text-decoration-none">Corporate Information</a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default HelpCenterFooter;