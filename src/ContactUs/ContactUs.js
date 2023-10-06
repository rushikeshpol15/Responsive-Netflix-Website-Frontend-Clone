import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import ContactUsSection from "./ContactUsSection";

function ContactUs()
{
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <ContactUsSection/>
        <HelpCenterFooter button={false}/>
        </>
    )
}

export default ContactUs;