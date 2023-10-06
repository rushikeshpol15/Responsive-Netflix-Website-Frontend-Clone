import JoinNowOneFooter from "./JoinNowOneFooter";
import JoinNowOneHeader from "./JoinNowOneHeader";
import JoinNowOneSection from "./JoinNowOneSection";

function JoinNowOne(props)
{
    return(
        <>
        <JoinNowOneHeader SignInOrOut={"Sign In"}/>
        <JoinNowOneSection mailId={props.mailId}/>
        <JoinNowOneFooter/>
        </>
    )
}

export default JoinNowOne;