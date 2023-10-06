import { useState } from "react";
import "./homepage.css";
import { useNavigate } from "react-router-dom";
function SignInInput(props)
{
    let[email,setEmail]=useState("");
    let[validation,setValidation]=useState(false);

    let Naviget=useNavigate();

    function handleValidation(e)
    {
        setEmail(e);

        let regX=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;

        if(regX.test(email))
        {
            setValidation(true);
            props.handleEmail(email);
        }
        else if(!regX.test(validation)|| email.length==0)
        {
            setValidation(false);
        }
    }

    function handleBtn()
    {
        if(validation)
        {
            Naviget('./JoinNowOne')
        }
    }

    return(
        <>
        <div className="d-flex input-box-container">

            <div className="input-div">
                <input type="text" id="SignInInput" className={(validation)?"form  border border-success":"form"} placeholder=" " onChange={(e)=>{handleValidation(e.target.value)}}/>
                <label htmlFor="SignInInput" className="placeholder-text">Email address</label>
            </div>
            
            <button className="sign-in-button px-4" onClick={()=>{handleBtn()}} >Get Started &gt;</button>
        </div>
       {(!validation&&email.length>2)? <span className="text-danger">please enter valid email address</span>:null}
       
        </>
    )
}

export default SignInInput;