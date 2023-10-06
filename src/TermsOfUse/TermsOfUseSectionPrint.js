import "./TermsOfUse.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
function TermsOfUseSectionPrint()
{
    return(
        <>
        <div className="d-flex justify-content-between mb-3">
            <a href="/" className="text-danger text-decoration-none d-flex align-items-center print-a"> <FontAwesomeIcon icon={faArrowLeft} style={{color: "#df1111", marginRight:"1em"}} />Back to Help Home</a>
            <button className="btn btn-white fw-bold border border-dark print-button">
            <FontAwesomeIcon icon={faPrint} style={{color: "#000000",marginRight:"0.5em"}} />
            <span className="print-text">PRINT</span>
            </button>
        </div>
        </>
    )
}
export default TermsOfUseSectionPrint;