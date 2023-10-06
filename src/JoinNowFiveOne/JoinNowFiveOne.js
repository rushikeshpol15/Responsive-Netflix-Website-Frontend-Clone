import JoinNowOneHeader from "../JoinNowOne/JoinNowOneHeader";
import JoinNowOneFooter from "../JoinNowOne/JoinNowOneFooter";
import JoinNowFiveOneSection from "./JoinNowFiveOneSection";

function JoinNowFiveOne(props)
{
    return(
        <>
        <JoinNowOneHeader SignInOrOut={"Sign Out"}/>
        <JoinNowFiveOneSection plan={props.plan} price={props.price}/>
        <JoinNowOneFooter/>
        </>
    )
}
export default JoinNowFiveOne;