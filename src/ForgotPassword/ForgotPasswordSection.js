import { useState } from "react";
import "./ForgotPassword.css";

function ForgotPasswordSection()
{

    let[learnMoreViSibility,setlearnMoreViSibility]=useState(true);
    return(
        <>
        <section className="forgot-password-section">
            <div className="forgot-password-center-div">
                    <h2 className="fw-bold mb-3" style={{fontSize:"1.9em"}}>Forgot Email/Password</h2>
                    <p className="mb-3">How would you like to reset your password?</p>
                    {/* <div className="forgor-pass-container">
                        <input type="radio" id="forgotPass" className="forgot-password-checkbox" checked="true"/>
                        <label htmlFor="forgotPass" className="forgot-pass-label">Email</label>
                    </div> */}
                    <p className="mb-3">We will send you an email with instructions on how to reset your password.</p>
                    <input type="text" className="forgot-pass-email-input" placeholder="name@example.com"/>

                    <button className="forgot-pass-email-btn text-white">Email Me</button>

                    <a href="#" className="I-cant-remember-a-tag text-decoration-none">I can't remember my email address or phone number.</a>
            </div>
           
            <div className="reCAPTCHA-box">

                <p className="text-secondary" style={{fontSize:"0.9em"}}>This page is protected by Google reCAPTCHA to ensure you're not a bot.{(learnMoreViSibility)?<span className="text-decoration-underline" style={{cursor:"pointer"}} onClick={()=>{setlearnMoreViSibility(false)}}> Learn more.</span>:null}</p>
                
                {(!learnMoreViSibility)?<p className="text-secondary" style={{fontSize:"0.9em"}} >The information collected by Google reCAPTCHA is subject to the Google <a href="/Privacy" className="text-decoration-none captcha-a-link fw-bold" style={{fontSize:"inherit"}}>Privacy Policy</a> and <a href="/TermsOfUse" className="text-decoration-none captcha-a-link fw-bold" style={{fontSize:"inherit"}}>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
                :null}

            </div>
        </section>
        </>
    )
}
export default ForgotPasswordSection;