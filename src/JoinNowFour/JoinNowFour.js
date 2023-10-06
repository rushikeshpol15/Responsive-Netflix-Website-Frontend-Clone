import JoinNowOneHeader from "../JoinNowOne/JoinNowOneHeader";
import JoinNowOneFooter from "../JoinNowOne/JoinNowOneFooter";
import JoinNowFourSection from "./JoinNowFourSection";

function JoinNowFour()
{
    return(
        <>
        <JoinNowOneHeader SignInOrOut={"Sign Out"}/>
        <JoinNowFourSection/>
        <JoinNowOneFooter/>
        </>
    )
}
export default JoinNowFour;