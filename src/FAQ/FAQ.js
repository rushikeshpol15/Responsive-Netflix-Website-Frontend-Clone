import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import FAQSection from "./FAQSection";
import { useEffect , useState } from "react";
import { useLocation } from "react-router-dom";


function FAQ()
{
     let currLocation=useLocation();

    useEffect(()=>{
        window.scrollTo(0, 0);
    },[currLocation]);
     
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <FAQSection/>
        <HelpCenterFooter/>
        </>
    )
}
export default FAQ;
