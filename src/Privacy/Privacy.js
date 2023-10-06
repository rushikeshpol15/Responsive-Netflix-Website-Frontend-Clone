import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import PrivacySection from "./PrivacySection";

function Privacy()
{
    return(
            <>
            <HelpCenterNavbar search={false}/>
            <PrivacySection/>
            <HelpCenterFooter button={false}/>
            </>
        )
}

export default Privacy;