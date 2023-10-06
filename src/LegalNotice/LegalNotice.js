import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import LegalNoticeSection from "./LegalNoticeSection";

function LegalNotice()
{
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <LegalNoticeSection/>
        <HelpCenterFooter button={false}/>
        </>
    )
}
export default LegalNotice;