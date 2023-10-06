import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";

import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import "./TermsOfUse.css";
import TermsOfUseSection from "./TermsOfUseSection";

function TermsOfUse()
{
    return(
        <>
        <HelpCenterNavbar page={false}/>
        <TermsOfUseSection/>
        <HelpCenterFooter button={false}/>
        </>
    )
} 
export default TermsOfUse;