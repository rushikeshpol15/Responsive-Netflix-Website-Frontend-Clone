import TermsOfUseSectionPrint from "../TermsOfUse/TermsOfUseSectionPrint";
import "./FAQ.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import FAQone from "./FAQ-one.png";
import FAQtwo from "./FAQ-two.png";
import FAQthree from "./FAQ-three.png";
import FAQfour from "./FAQ-four.png";
import FAQfive from "./FAQ-five.png";

function FAQSection()
{
        let Navigate=useNavigate();

    return(
        <>
        <section className="FAQ-section">
            <TermsOfUseSectionPrint/>
            <div className="FAQ-container">

                <div className="FAQ-subcontainer-one">
                    <h1 className="FAQ-subcontainer-one-h1 fw-bolder mb-3">What is Netflix?</h1>

                    <img src={FAQone} alt="img" width={"100%"} className="mb-3 rounded"/>
                    <p>Netflix is a subscription-based <a onClick={()=>{Navigate('/OnlyOnNetflix')}} className="text-decoration-none text-danger">streaming service</a> that allows our members to watch TV shows and movies on an internet-connected device.   </p>
                    <p><a  className="text-decoration-none text-danger">Depending on your plan</a>, you can also <a onClick={()=>{Navigate('/OnlyOnNetflix')}} className="text-decoration-none text-danger">download TV shows and movies</a> to your iOS, Android, or Windows 10 device and watch without an internet connection.</p>
                    <p className="pb-5">If you're already a member and would like to learn more about using Netflix, visit <a onClick={()=>{Navigate('/JoinNowMain')}} className="text-decoration-none text-danger">Getting started with Netflix</a>.</p>
                    <hr/>

                    <h5 className="fw-bold mt-5 mb-4">TV Shows & Movies</h5>
                    <img src={FAQtwo} alt="img" width={"100%"} className="mb-3 rounded"/>
                    <p>Netflix content varies by region and may change over time. You can watch a variety of <a onClick={()=>{Navigate('/OnlyOnNetflix')}} className="text-danger text-decoration-none">award-winning Netflix originals, TV shows, movies, documentaries, and more</a>.</p>
                    <p className="pb-5">The more you watch, the better Netflix gets at <a onClick={()=>{Navigate('/MediaCenter')}} className="text-danger text-decoration-none">recommending</a> TV shows and movies.</p>
                    <hr/>
                    
                    <h5 className="fw-bold mt-5 mb-4">Supported Devices</h5>
                    <img src={FAQthree} alt="img" width={"100%"} className="mb-3 rounded"/>
                    <p>You can watch Netflix through any <a  className="text-decoration-none text-danger">internet-connected device </a> that offers the Netflix app, including smart TVs, game consoles, streaming media players, set-top boxes, smartphones, and tablets. You can also watch Netflix on your computer using an internet browser. You can review the <a  className="text-decoration-none text-danger">system requirements</a> for web browser compatibility, and check our <a  className="text-decoration-none text-danger">internet speed recommendations</a> to achieve the best performance. </p>
                    <div className="left-border-div mb-3"> <strong>NOTE:</strong> <span className="small-span-text">A small percentage of devices may not be supported by <a  className="text-danger text-decoration-none">all plans</a>.</span>  </div>
                    <p>Need help getting set up? Search our <a onClick={()=>{Navigate('/HelpCenter')}} className="text-decoration-none text-danger">Help Center</a> for the manufacturer of the device you're using.</p>
                    <div className="left-border-div mb-5"> <strong>NOTE:</strong> <span className="small-span-text">The Netflix app may come pre-loaded on certain devices, or you may need to download the Netflix app onto your device. Netflix app functionality may differ between devices.</span>  </div>
                    <hr/>

                    <h5 className="fw-bold mt-5 mb-4">Plans and Pricing</h5>
                    <img src={FAQfour} alt="img" width={"100%"} className="mb-3 rounded"/>
                    <p>Each  <a  className="text-danger text-decoration-none">Netflix plan</a> determines the number of devices you can watch Netflix on at the same time and whether you can watch in High Definition (HD), Full High Definition (FHD), or Ultra High Definition (UHD).</p>
                    <p className="mb-5">You can <a  className="text-danger text-decoration-none">change your plan</a> or <a  className="text-danger text-decoration-none">cancel</a> online at any time.</p>
                    <hr/>

                    <h5 className="fw-bold mt-5 mb-4">Get Started</h5>
                    <img src={FAQfive} alt="img" width={"100%"} className="mb-3 rounded"/>
                    <p>To start watching Netflix:</p>
                    <ul className="FAQ-orderlist">
                        <li>Visit <a  onClick={()=>{Navigate('/JoinNowMain')}}  className="text-danger text-decoration-none">netflix.com/signup</a>.</li>
                        <li><a  onClick={()=>{Navigate('/JoinNowMain')}}  className="text-danger text-decoration-none">Choose a plan</a>.</li>
                        <li>Create an account by entering your email address and creating a password.</li>
                        <li>Enter a <a  className="text-danger text-decoration-none">payment method</a>.</li>

                    </ul>
                    <p className="mb-3">As a Netflix member, you are charged once a month on the date you signed up. </p>
                    <hr/>


                </div>

                <div className="FAQ-subcontainer-two mt-lg-5">
                    <div className="d-flex flex-column">

                        <h5 className="mb-3">Related Articles</h5>

                        <span className="FAQ-subcontainer-two-span d-flex align-items-center">
                        <FontAwesomeIcon icon={faFileLines} style={{color: "#050505",marginRight:"0.9em"}} />
                        <a  className="text-dark">Getting started with Netflix</a>
                        </span>

                        <span className="FAQ-subcontainer-two-span d-flex align-items-center">
                        <FontAwesomeIcon icon={faFileLines} style={{color: "#050505",marginRight:"0.9em"}} />
                        <a  className="text-dark">Billing and Payments</a>
                        </span>

                        <span className="FAQ-subcontainer-two-span d-flex align-items-center">
                        <FontAwesomeIcon icon={faFileLines} style={{color: "#050505",marginRight:"0.9em"}} />
                        <a  className="text-dark">Billing and Payments</a>
                        </span>

                        <span className="FAQ-subcontainer-two-span d-flex align-items-center">
                        <FontAwesomeIcon icon={faFileLines} style={{color: "#050505",marginRight:"0.9em"}} />
                        <a  className="text-dark">Can't sign in to Netflix</a>
                        </span>

                        <span className="FAQ-subcontainer-two-span d-flex align-items-center">
                        <FontAwesomeIcon icon={faFileLines} style={{color: "#050505",marginRight:"0.9em"}} />
                        <a  className="text-dark">How to create, change, or delete profiles</a>
                        </span>

                    </div>
                </div>

            </div>
        </section>
        </>
    )
}
export default FAQSection;
