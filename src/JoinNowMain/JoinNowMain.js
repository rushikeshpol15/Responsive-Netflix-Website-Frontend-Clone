import JoinNowOneFooter from "../JoinNowOne/JoinNowOneFooter";
import JoinNowOneHeader from "../JoinNowOne/JoinNowOneHeader";
import JoinNowMainSection from "./JoinNowMainSection";

function JoinNowMain()
{
    return(
        <>
        <JoinNowOneHeader SignInOrOut={"Sign In"}/>
        <JoinNowMainSection/>
        <JoinNowOneFooter/>
        </>
    )
}
export default  JoinNowMain;