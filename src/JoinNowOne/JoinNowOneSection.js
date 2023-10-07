import { useEffect, useState } from "react";
import "./JoinNowOne.css";
import { useNavigate } from "react-router-dom";


function JoinNowOneSection(props)
{
    // console.log(props.mailId);
    let[email,setEmail]=useState(props.mailId);
    let[alreayReceivedEmail,setAlreadyReceivedEmail]=useState(false);
    let[Manualemail,setManualEmail]=useState("");
    let[ManualemailValidation,setManualEmailValidation]=useState(false);
    let Navigate=useNavigate();



    function handleEmailVali(e)
    {
        let reg=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
        setManualEmail(e);

        if(reg.test(Manualemail))
        {
            setManualEmailValidation(true);
        }
        else if(!reg.test(Manualemail)|| Manualemail.length==0)
        {
            setManualEmailValidation(false);
        }


    }

     function handleJoinNowOneNext()
    {
        if(alreayReceivedEmail || ManualemailValidation)
        {
            Navigate('/JoinNowTwo');
        }
    }
    

    useEffect(()=>{
        if(email.length>2)
        {
            setAlreadyReceivedEmail(true);
        }
    })

    return(
        <>
            <section className="join-now-one-section">

                <div className="join-now-one-section-container">
                    <span style={{fontSize:"0.8em"}}>STEP <strong>1</strong> OF <strong>3</strong></span>
                    <h2 className="fw-bold mb-3" style={{fontSize:"1.7em"}}>Welcome back!<br/> Joining Netflix is easy.</h2>
                    <span style={{fontSize:"1.1em"}}>Enter your password and you'll be watching in no time.</span>

                    <div className="join-now-one-section-email-container mt-3">
                        <input type="text" id="join-now-one-section-email" className="join-now-one-section-email" placeholder=" " value={(alreayReceivedEmail)?email:Manualemail} onChange={(e)=>{handleEmailVali(e.target.value)}} />
                        <label className="join-now-one-section-email-span" htmlFor="join-now-one-section-email">Email</label>
                    </div>
                   {(!ManualemailValidation&&Manualemail.length>2)? <span className="text-danger">please enter valid Email address</span>:null}
                   
                    <div className="join-now-one-section-password-container mt-3 mb-4 ">
                        <input type="password"  id="join-now-one-section-password" className="join-now-one-section-password" placeholder=" "/>
                        <label htmlFor="join-now-one-section-password" className="join-now-one-section-password-span">Password</label>
                    </div>

                    <a onClick={()=>{Navigate('/ForgotPassword')}} className="text-decoration-none wq  join-now-one-link-hover" style={{color:"rgb(0, 119, 255)"}}>Forgot your password?</a> 

                    {/* <div className="join-now-one-section-last-btn-box"> */}
                        <a onClick={()=>{handleJoinNowOneNext()}} className="join-now-one-section-last-btn text-decoration-none text-white py-3 mt-4 d-block  text-center" >Next</a>

                    {/* </div> */}
                </div>

            </section>
        </>
    )
}
export default JoinNowOneSection;
