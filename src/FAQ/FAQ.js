import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import FAQSection from "./FAQSection";
import { useEffect } from "react";


function FAQ()
{
     useEffect(()=>{
        location.reload();
    })
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <FAQSection/>
        <HelpCenterFooter/>
        </>
    )
}
export default FAQ;
