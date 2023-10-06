import "./JoinNowTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck} from "@fortawesome/free-regular-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
function JoinNowTwoSection()
{
    return(
        <>
            <section className="join-now-two-section">
                <div className="join-now-two-section-center-box">
                        <div className="text-center">
                        <FontAwesomeIcon icon={faCircleCheck} style={{color: "#ed0c0c",}} className="faCHeck" />
                        </div>
                <span style={{fontSize:"0.8em"}} className="d-block text-center mb-2">STEP <strong>2</strong> OF <strong>3</strong></span>
                <h2 className="fw-bold mb-3 text-center" style={{fontSize:"1.7em"}}>Choose your plan.</h2>

                <div className="d-flex mb-3" style={{gap:"1em"}}>
                    <div> <FontAwesomeIcon icon={faCheck} style={{color: "#f10909",}} className="faCheckTick" /> </div>
                <span style={{fontSize:"1.2em"}}>No commitments, cancel <br/>anytime.</span>
                </div>

                <div className="d-flex mb-3" style={{gap:"1em"}}>
                    <div> <FontAwesomeIcon icon={faCheck} style={{color: "#f10909",}} className="faCheckTick" /> </div>
                <span style={{fontSize:"1.2em"}}>Everything on Netflix for one low price.</span>
                </div>

                <div className="d-flex mb-3" style={{gap:"1em"}}>
                    <div> <FontAwesomeIcon icon={faCheck} style={{color: "#f10909",}} className="faCheckTick" /> </div>
                <span style={{fontSize:"1.2em"}}>No ads and no extra fees. Ever.</span>
                </div>

                <a href="/JoinNowThree" className="join-now-two-section-last-btn text-decoration-none text-white py-3 mt-4 d-block  text-center" >Next</a>

                

                </div>
            </section>
        </>
    )
}
export default JoinNowTwoSection;