import "./JoinNowFour.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function JoinNowFourSection()
{
    let ToNavigate=useNavigate();
    return(
        <>
            <section className="join-now-four-section">
                <div className="join-now-four-center-BOX">
                    <div className="text-center mb-5">
                    <img src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png" alt="img" className="lockImg"/>
                    </div>
                    <span style={{fontSize:"0.8em"}} className="d-block text-sm-center mb-2">STEP <strong>3</strong> OF <strong>3</strong></span>
                    <h2 className="fw-bold mb-3 text-sm-center" style={{fontSize:"1.7em"}}>Choose how to pay</h2>
                    <p className="text-sm-center" style={{fontSize:"1.1em"}}>
                        <span className="d-none d-sm-inline">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>Your payment is encrypted and you can change your payment method at anytime.
                    </p>
                    <span  className="d-block text-sm-center fw-bold" style={{fontSize:"1.1em"}}>Secure for peace of mind.</span>
                    <span  className="d-block text-sm-center fw-bold mb-4" style={{fontSize:"1.1em"}}>Cancel easily online.</span>

                    <div style={{fontSize:"0.8em"}} className="d-flex align-items-baseline justify-content-end mb-2">
                    End-to-end encrypted
                    <FontAwesomeIcon icon={faLock} style={{color: "#fbd40e",marginLeft:"0.5em",height:"13px"}} />
                    </div>

                    <div className="credit-card-container d-flex justify-content-between" onClick={()=>{ToNavigate('/JoinNowFiveOne')}}>
                        <div className="credit-card-title-img d-flex align-items-baseline">
                            <h6>Credit or Debit Card</h6>
                            <div>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMEX.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/DINERS.png" alt="img" className="credit-card-img"/>

                            </div>

                        </div>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "#141414",height:"20px"}} />
                    </div>

                    <div className="credit-card-container d-flex justify-content-between" onClick={()=>{ToNavigate('/JoinNowFiveTwo')}}>
                        <div className="credit-card-title-img d-flex align-items-baseline">
                            <h6>UPI AutoPay</h6>
                            <div>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/BHIM.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PAYTM.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/PHONEPE.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/AMAZONPAY.png" alt="img" className="credit-card-img"/>
                                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/GPAY.png" alt="img" className="credit-card-img"/>

                            </div>

                        </div>
                        <FontAwesomeIcon icon={faChevronRight} style={{color: "#141414",height:"20px"}} />
                    </div>

                </div>
            </section>
        </>
    )
}
export default JoinNowFourSection;