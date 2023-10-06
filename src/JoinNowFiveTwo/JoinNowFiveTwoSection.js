import "./JoinNowFiveTwo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function JoinNowFiveTwoSection()
{

    let[upiSelectorClick,setUpiSelectorClick]=useState(false);
    let[upiselectorImage,setUpiSelectorImage]=useState("");
    let[UpiSpan,setUpiSpan]=useState("");
    let[selectYourUPIVisibility,setselectYourUPIVisibility]=useState(true);
    let[UpiMethodIndex,setUpiMethodIndex]=useState(0);

    function handleUpiList(IMG,SPAN,index)
    {
        setUpiSelectorImage(IMG);
        setUpiSpan(SPAN);
        setselectYourUPIVisibility(false);
        setUpiMethodIndex(index);
        setUpiSelectorClick(false)
    }

    return(
        <>
            <section className="join-now-five-two-section">
                <div className="join-now-five-two-section-center-container">
                    <span style={{fontSize:"0.8em"}} className="d-block mb-2">STEP <strong>3</strong> OF <strong>3</strong></span>
                    <h2 className="fw-bold mb-3" style={{fontSize:"1.7em"}}>Set up UPI AutoPay</h2>
                    <p>You can change this recurring payment any time in your settings.</p>

                    <div className="UPI-payment-parent-container">
                     
                        <div className={(upiSelectorClick)?"upi-selector forBorderBottom d-flex align-items-center justify-content-between":"upi-selector d-flex align-items-center justify-content-between"} onClick={()=>{setUpiSelectorClick(!upiSelectorClick)}}>
                            {(selectYourUPIVisibility) ? <span>Select your UPI app</span>
                                : <div >
                                    <img className="upiImage" src={upiselectorImage} alt="img" />
                                    <span >{UpiSpan}</span>
                                  </div>}   
                            <FontAwesomeIcon icon={faCaretDown} style={{color: "#0d0d0d",transition:"transform 0.4s"}} className={(upiSelectorClick)?"caretRotate":""} />
                        </div>

                       {(upiSelectorClick)? <div className="UPI-list-container">

                            <div className="UPI-list" onClick={()=>{handleUpiList("https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png","BHIM UPI",1)}}>
                                <img className="upiImage" src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png" alt="img"/>
                                <span className={(UpiMethodIndex==1)?"fw-bold":""}>BHIM UPI</span>
                            </div>
                            <div className="UPI-list" onClick={()=>{handleUpiList("https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png","Paytm",2)}}>
                                <img className="upiImage" src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png" alt="img"/>
                                <span className={(UpiMethodIndex==2)?"fw-bold":""}>Paytm</span>
                            </div>
                            <div className="UPI-list" onClick={()=>{handleUpiList("https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png","PhonePe",3)}}>
                                <img className="upiImage"    src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png" alt="img"/>
                                <span className={(UpiMethodIndex==3)?"fw-bold":""}>PhonePe</span>
                            </div>
                            <div className="UPI-list" onClick={()=>{handleUpiList("https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png","Amazon Pay",4)}}>
                                <img className="upiImage"    src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png" alt="img"/>
                                <span className={(UpiMethodIndex==4)?"fw-bold":""}>Amazon Pay</span>
                            </div>
                            <div className="UPI-list" onClick={()=>{handleUpiList("https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png","Google Pay",5)}}>
                                <img className="upiImage" src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png" alt="img"/>
                                <span className={(UpiMethodIndex==5)?"fw-bold":""}>Google Pay</span>
                            </div>
                            <div className="UPI-list" onClick={()=>{handleUpiList("https://assets.nflxext.com/ffe/siteui/acquisition/payment/other.png","Other",6)}}>
                                <img className="upiImage" src="https://assets.nflxext.com/ffe/siteui/acquisition/payment/other.png" alt="img"/>
                                <span className={(UpiMethodIndex==6)?"fw-bold":""} >Other</span>
                            </div>

                        </div>:null}

                    </div>

                    <div className="upi-input-container">
                        <input type="tel" id="upiNumber" className="upi-imput" placeholder=" "/>
                        <label htmlFor="upiNumber" className="upi-input-label">UPI ID</label>
                    </div>

                    <a  href="#" className="how-do-i-find-link text-decoration-none">How do I find my UPI ID?</a>

                    <button className="join-five-two-next-btn text-white">Next</button>
                </div>
            </section>
        </>
    )
}

export default JoinNowFiveTwoSection;