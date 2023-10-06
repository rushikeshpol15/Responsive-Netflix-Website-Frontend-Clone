import Header from "./HeaderComponent";
import Section from "./Section";
import Accordion from "./AccordionSection";
import Footer from "./FooterComponent";
function Homepage(props)
{
    return(
        <>
        <Header handleEmail={props.handleEmail}/>
        <Section/>
        <Accordion handleEmail={props.handleEmail}/>
        <Footer/>
        </>
    )
}

export default Homepage;