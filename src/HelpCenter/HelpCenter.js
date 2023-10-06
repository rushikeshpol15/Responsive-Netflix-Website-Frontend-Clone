import HelpCenterNavbar from "./HelpCenterNavbar";
import HelpCenterSection from "./HelpCenterSection";
import HelpCenterFooter from "./HelpCenterFooter";

function HelpCenter()
{
    return(
        <>
        <HelpCenterNavbar search={true}/>
        <HelpCenterSection/>
        <HelpCenterFooter button={true}/>
        </>
    )
}

export default HelpCenter;