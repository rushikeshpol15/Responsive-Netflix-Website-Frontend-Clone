import HelpCenterFooter from "../HelpCenter/HelpCenterFooter";
import HelpCenterNavbar from "../HelpCenter/HelpCenterNavbar";
import FAQSection from "./FAQSection";
import { useEffect , useState } from "react";


function FAQ()
{
     let[first,setFirst]=useState(0);
    
    useEffect(()=>{
      let timer= setTimeout(()=>{
            window.location.reload();
        },10);
        return (clearTimeout(timer));
    },[first]);
     
    return(
        <>
        <HelpCenterNavbar search={false}/>
        <FAQSection/>
        <HelpCenterFooter/>
        </>
    )
}
export default FAQ;
