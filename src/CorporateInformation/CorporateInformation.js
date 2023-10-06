import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import CorporateSection from "./CorporateSection";

function CorporateInformation()
{
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <CorporateSection/>
        <HelpCenterFooter button={false}/>
        
        </>
    )
}
export default CorporateInformation;