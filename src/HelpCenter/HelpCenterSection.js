import "./helpCenter.css";
import { faFileLines } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";


function HelpCenterSection()
{
      let Navigate=useNavigate();

    return(
        <>
        <section className="pt-4 Help-section">
        <h4 className="fw-bolder">Sign in for personalized help</h4>
        <div className="d-inline-flex flex-column flex-sm-row">
        <a onClick={()=>{Navigate('/Account')}}  className="text-decoration-none text-white me-3 mb-3 mb-sm-0 border border-danger py-2 px-3 a-SIGN-IN fw-bold">SIGN IN</a>
        <a onClick={()=>{Navigate('/JoinNowMain')}} className="text-decoration-none text-danger border border-danger py-2 px-3 a-JOIN-NETFLIX fw-bold">JOIN NETFLIX</a>
        </div>
        <div className="text-muted fw-bold my-4">Popular topics</div>
        <div className="d-flex flex-column flex-sm-row" style={{gap:"15px"}}>
            <PopularTopicsLinks link="How to sign up for Netflix"/>
            <PopularTopicsLinks link="Plans for Pricing"/>
            <PopularTopicsLinks link="Can't sign in to Netflix"/>
        </div>
        <hr className="my-4"/>

        
        <div className="Mycontainer mb-3">
            <div className="Myrow w-75 w-sm-100">

                <div className=" d-inline-flex flex-column " style={{gap:"10px"}} >
                    <h5 className="text-dark fw-bold">Getting Started</h5>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">How to sign up for Netflix <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">What is Netflix? <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Plans and Pricing <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                </div>


                  <div className="d-inline-flex flex-column " style={{gap:"10px"}}>
                    <h5 className="text-dark fw-bold">Can't Watch</h5>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">How to change or reset your password <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Netflix says to sign up when trying to sign in <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Netflix says, 'This app is not compatible with your device.' <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                  </div>
                  


                  <div className="d-inline-flex flex-column " style={{gap:"10px"}}>
                    <h5 className="text-dark fw-bold">Manage My Account</h5>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Can't sign in  to Netfliix <span className=" fw-bold  hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">How to restart your Netflix account <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Netflix account email was changed without permission <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                  </div>


                  <div className="d-inline-flex flex-column " style={{gap:"10px"}}>
                    <h5 className="text-dark fw-bold">Watching Netflix</h5>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">What devices can I use to stream Netflix? <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">How to watch Netflix on your TV <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">How to download titles to watch offline <span className=" fw-bold hd" style={{color:"red"}}>&gt;</span></a>
                  </div>


                  <div className="d-inline-flex flex-column " style={{gap:"10px"}}>
                    <h5 className="text-dark fw-bold">Quick Links</h5>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Content Grievances in India <span className=" fw-bold" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Reset Password<span className=" fw-bold" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Update email<span className=" fw-bold" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Get help signing in<span className="fw-bold" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">Update payment method<span className=" fw-bold" style={{color:"red"}}>&gt;</span></a>
                    <a  className="text-muted text-decoration-none d-inline-flex justify-content-between">request TV shows or movies<span className="fw-bold" style={{color:"red"}}>&gt;</span></a>
                  </div>
            </div>
        </div>
        </section>
        </>
    )
}

function PopularTopicsLinks(props)
{
    return(
        <>
        <div className="HelpCenter-card card shadow">
            <div className="card-body d-flex align-items-center">
            <FontAwesomeIcon icon={faFileLines} style={{color: "#080808", marginRight:"12px"}} />
             <a  className="text-decoration-none text-dark fw-bold">{props.link}</a> 
            </div>
        </div>
        </>
    )
}
export default HelpCenterSection;
