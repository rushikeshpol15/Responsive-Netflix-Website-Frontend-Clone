import "./JoinNowMain.css";
import { useNavigate } from "react-router-dom";

function JoinNowMainSection()
{
        let Navigate=useNavigate();

    return(
        <>
        <section className="join-now-main-section">

            <div className="join-now-main-section-center-container">
                <img className="img-fluid mb-4" src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Devices.png" alt="img" width="100%"/>
                <span style={{fontSize:"0.8em"}} className="d-block text-center mb-2">STEP <strong>1</strong> OF <strong>3</strong></span>
                <h2 className="fw-bold mb-3 text-center" style={{fontSize:"1.7em"}}>Finish setting up your account</h2>
                <p className="text-center" style={{fontSize:"1.1em"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Netflix is personalised for you. <br/> Create a password to watch on any device at any time.</p>
                <a onClick={()=>{Navigate('/JoinNowOne')}} className="join-now-main-section-last-btn text-decoration-none text-white py-3 mt-4 d-block  text-center" >Next</a>

            </div>

        </section>
        </>
    )
}

export default JoinNowMainSection;
