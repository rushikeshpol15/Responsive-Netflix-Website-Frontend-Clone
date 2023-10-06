import "./JoinNowFiveOne.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard ,faCircleQuestion} from "@fortawesome/free-regular-svg-icons";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";

function JoinNowFiveOneSection(props)
{
    let[expireNumber,setExpireNumber]=useState("");
    let[expireMonthStatus,setexpireMonthStatus]=useState(false);
    let[learnMoreVisibility,setLearnMoreVisibility]=useState(false);

    function handleKeyPress(e)
    {
        if(expireNumber.length==3&&e.key=='Backspace')
        {
            let number=expireNumber.slice(0,-1);
            setExpireNumber(number);
        }
    }

    function handleExpiring(number)
    {
        setExpireNumber(number);
        if(number.length==2)
        {
            let newNumber=number + '/';
            setExpireNumber(newNumber);
        }
      

        if(number.length==4&&number.charAt(3)>'1')
        {
           setexpireMonthStatus(true);
        }
        else if(number.length==5&&number.charAt(4)>'2')
        {
            setexpireMonthStatus(true);
        }
        else{
           setexpireMonthStatus(false);
        }
    }


    return(
        <>
        <section className="join-now-five-one-section">
            <div className="join-now-five-one-centerDIV">
            <span style={{fontSize:"0.8em"}} className="mb-2">STEP <strong>3</strong> OF <strong>3</strong></span>
            <h2 className="fw-bold mb-3" style={{fontSize:"1.8em"}}>Set up your credit or debit card</h2>
            <div>
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="img" className="credit-card-IMG"/>
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="img" className="credit-card-IMG"/>
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="img" className="credit-card-IMG"/>
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="img" className="credit-card-IMG"/>
            </div>

            <div className="grey-border-class d-flex align-items-center position-relative" style={{gap:"0.5em"}}>
                <input type="number" id="card-number"className="card-number-input " placeholder=" "/>
                <label htmlFor="card-number" className="card-number-label">Card number</label>
                <FontAwesomeIcon icon={faCreditCard} style={{color: "#b1b2b4",height:"25px"}} />
            </div>

            <div className="d-flex" style={{gap:"1em"}}>
                <div className="grey-border-class d-flex align-items-center position-relative" style={{gap:"0.5em"}}>
                    <input type="tel" id="card-month-number"className="card-month-input" placeholder="MM/YY" value={expireNumber} onKeyDown={(e)=>{handleKeyPress(e)}} onChange={(e)=>{handleExpiring(e.currentTarget.value)}}/>
                    <label htmlFor="card-month-number" className="card-month-label">Expiration date</label>
                </div>
                <div className="grey-border-class d-flex align-items-center position-relative" style={{gap:"0.5em"}}>
                    <input type="tel" id="card-CVV-number"className="card-CVV-input" placeholder=" " />
                    <label htmlFor="card-CVV-number" className="card-CVV-label">CVV</label>
                    <FontAwesomeIcon icon={faCircleQuestion} style={{color: "#adadae",height:"25px"}} />
                </div>
                
            </div>
            {(!expireMonthStatus&&expireNumber.length>3)?<span className="text-danger" style={{fontSize:"0.8em"}}>please Enter a valid expiry date</span>:null}
            
                <div className="grey-border-class d-flex align-items-center position-relative" style={{gap:"0.5em"}}>
                    <input type="tel" id="card-name"className="card-name-input" placeholder=" " />
                    <label htmlFor="card-name" className="card-name-label">Name on card</label>
                </div>


                <div className="subcription-with-change-link-container d-flex align-items-center justify-content-between">
                    <div >
                        <h6 className="fw-bold mb-0">₹ {props.price}/month</h6>
                        <span style={{color:"grey",marginTop:"0.1em"}}>{props.plan}</span>
                    </div>
                    <a href="/JoinNowThree" className="text-decoration-none change-a-link fw-bold">Change</a>
                </div>

                <p className="payment-last-para">Any payment above ₹ 2000 shall need additional authentication.</p>
                <p className="payment-last-para">By checking the checkbox below, you agree to our  <a href="/TermsOfUse" className="text-decoration-none change-a-link fw-bold" style={{fontSize:"inherit"}}>Terms of Use</a>, <a href="/Privacy" className="text-decoration-none change-a-link fw-bold" style={{fontSize:"inherit"}}>Privacy Statement</a>, and that you are over 18. Netflix will automatically continue your membership and charge the membership fee (currently ₹ 199/month) to your payment method until you cancel. You may cancel at any time to avoid future charges.</p>

                <div className="position-relative">
                    <input type="checkbox" id="agree" className="i-agree-checkbox"/>
                    <label htmlFor="agree"  className="i-agree-label">I agree</label>
                </div>

                <button className="start-membership-btn text-white">Start Membership</button>

                <p className="payment-last-para" >This page is protected by Google reCAPTCHA to ensure you're not a bot. {(!learnMoreVisibility)?<a href="#para" className="text-decoration-none change-a-link fw-bold" onClick={()=>{setLearnMoreVisibility(true)}} style={{fontSize:"inherit"}}>Learn more.</a>:null}</p>

               {(learnMoreVisibility)?<p className="payment-last-para" id="para" >The information collected by Google reCAPTCHA is subject to the Google <a href="/Privacy" className="text-decoration-none change-a-link fw-bold" style={{fontSize:"inherit"}}>Privacy Policy</a> and <a href="/TermsOfUse" className="text-decoration-none change-a-link fw-bold" style={{fontSize:"inherit"}}>Terms of Service</a>, and is used for providing, maintaining, and improving the reCAPTCHA service and for general security purposes (it is not used for personalised advertising by Google).</p>
                :null}
            </div>
        </section>
        </>
    )
}
export default JoinNowFiveOneSection;