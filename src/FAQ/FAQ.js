import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import FAQSection from "./FAQSection";

function FAQ()
{
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <FAQSection/>
        <HelpCenterFooter/>
        </>
    )
}
export default FAQ;