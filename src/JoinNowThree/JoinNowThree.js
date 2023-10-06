import JoinNowOneFooter from "../JoinNowOne/JoinNowOneFooter";
import JoinNowOneHeader from "../JoinNowOne/JoinNowOneHeader";
import JoinNowThreeSection from "./JoinNowThreeSection";

function JoinNowThree(props)
{
    return(
        <>
        <JoinNowOneHeader SignInOrOut={"Sign Out"}/>
        <JoinNowThreeSection handleSubsciption={props.handleSubsciption}/>
        <JoinNowOneFooter/>
        </>
    )
}

export default JoinNowThree;