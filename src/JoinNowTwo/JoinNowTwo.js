import JoinNowOneHeader from "../JoinNowOne/JoinNowOneHeader";
import JoinNowOneFooter from "../JoinNowOne/JoinNowOneFooter";
import JoinNowTwoSection from "./JoinNowTwoSection";

function JoinNowTwo()
{
    return(
        <>
            <JoinNowOneHeader SignInOrOut={"Sign Out"}/>
            <JoinNowTwoSection/>
            <JoinNowOneFooter/>
        </>
    )
}
export default JoinNowTwo;