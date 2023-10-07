import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import FAQSection from "./FAQSection";
import { useEffect } from "react";


function FAQ()
{
     setTimeout(()=>{
        window.location.reload();
    },10);
     
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <FAQSection/>
        <HelpCenterFooter/>
        </>
    )
}
export default FAQ;
