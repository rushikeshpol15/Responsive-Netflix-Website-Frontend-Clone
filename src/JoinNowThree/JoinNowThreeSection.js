import "./JoinNowThree.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck,faCircle ,faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function JoinNowThreeSection(props)
{
    let tonavigate=useNavigate();

    let[subsciptionPlanIndex,setSubscriptionPlanIndex]=useState(3);
    return(
        <>

        <section className="join-now-three-section">
            <div className="join-now-three-section-center">
            <span style={{fontSize:"0.8em"}} className="d-block mb-2">STEP <strong>2</strong> OF <strong>3</strong></span>
            <h2 className="fw-bold mb-3 " style={{fontSize:"1.7em"}}>Choose the plan that’s right for you</h2>
          
            <div className="d-flex mb-1" style={{gap:"0.7em"}}>
                    <div> <FontAwesomeIcon icon={faCheck} style={{color: "#f10909",height:"25px"}} /> </div>
                    <span style={{fontSize:"1.1em"}}>Watch all you want. Ad-free.</span>
            </div>

            <div className="d-flex mb-1" style={{gap:"0.7em"}}>
                    <div> <FontAwesomeIcon icon={faCheck} style={{color: "#f10909",height:"25px"}} /> </div>
                    <span style={{fontSize:"1.1em"}}>Recommendations just for you.</span>
            </div>

            <div className="d-flex mb-1" style={{gap:"0.7em"}}>
                    <div> <FontAwesomeIcon icon={faCheck} style={{color: "#f10909",height:"25px"}} /> </div>
                    <span style={{fontSize:"1.1em"}}>Change or cancel your plan anytime.</span>
            </div>

            <div className="subscription-packages-grid">
                
                <div className={(subsciptionPlanIndex==0)?"premium boxSHadow":"premium "} onClick={()=>{setSubscriptionPlanIndex(0);props.handleSubsciption("premium","649")}}>

                    <div className={(subsciptionPlanIndex==0)?"premium-top-color subsciption-top-color":"subsciption-top-color"}></div>

                    <div className="subscription-package-inner-div">

                        <div className="subscription-price-container d-flex align-items-center mb-3">
                          {(subsciptionPlanIndex==0)?  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#e40707",width:"15px",height:"15px",borderRadius:"50%"}} />
                           : <span style={{border:"1px solid grey",width:"15px",height:"15px",borderRadius:"50%"}}></span>}

                            <div className="price-and-pack-name d-flex flex-column">
                                <span className="pack-name fw-bold" style={{fontSize:"1.1em"}}>Premium</span>
                                <span className="mo-price fw-bold" style={{color:" rgb(80, 85, 85)",fontSize:"1.04em"}}>₹ 649/mo.</span>
                            </div>
                        </div>

                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==0)?"premium-circle-color":""} />
                            <span className={(subsciptionPlanIndex==0)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Our best video and sound quality</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==0)?"premium-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==0)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >4K resolution with HDR</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==0)?"premium-circle-color":""} />           
                            <span className={(subsciptionPlanIndex==0)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Immersive sound (spatial audio)</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==0)?"premium-circle-color":""} />  
                            <span className={(subsciptionPlanIndex==0)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Watch on your TV, computer, mobile phone and tablet</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==0)?"premium-circle-color":""} />
                            <span className={(subsciptionPlanIndex==0)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >4 devices for your household to watch at the same time</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==0)?"premium-circle-color":""} />    
                            <span className={(subsciptionPlanIndex==0)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >6 download devices</span>
                        </div>


                    </div>
                </div>

                <div className={(subsciptionPlanIndex==1)?"standard boxSHadow":"standard "} onClick={()=>{setSubscriptionPlanIndex(1);props.handleSubsciption("standard","499")}}>
                    <div  className={(subsciptionPlanIndex==1)?"standard-top-color subsciption-top-color":"subsciption-top-color"}></div>

                    <div className="subscription-package-inner-div">
                        <div className="subscription-package-inner-div">

                        <div className="subscription-price-container d-flex align-items-center mb-3">

                          {(subsciptionPlanIndex==1)?  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#9517d9",width:"15px",height:"15px",borderRadius:"50%"}} />
                           : <span style={{border:"1px solid grey",width:"15px",height:"15px",borderRadius:"50%"}}></span>}

                            <div className="price-and-pack-name d-flex flex-column">
                                <span className="pack-name fw-bold" style={{fontSize:"1.1em"}}>Standard</span>
                                <span className="mo-price fw-bold" style={{color:" rgb(80, 85, 85)",fontSize:"1.04em"}}>₹ 499/mo.</span>
                            </div>
                        </div>

                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==1)?"standard-circle-color":""} />
                            <span className={(subsciptionPlanIndex==1)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Great video and sound quality</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==1)?"standard-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==1)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >1080p resolution</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==1)?"standard-circle-color":""} />           
                            <span className={(subsciptionPlanIndex==1)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Watch on your TV, computer, mobile phone and tablet</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==1)?"standard-circle-color":""} />  
                            <span className={(subsciptionPlanIndex==1)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >2 devices for your household to watch at the same time</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==1)?"standard-circle-color":""} />
                            <span className={(subsciptionPlanIndex==1)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >2 download devices</span>
                        </div>
                        {/* <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}}  />    
                            <span className="subscrip-info-span" style={{fontSize:"0.9em"}} >6 download devices</span>
                        </div> */}


                    </div>

                    </div>
                    
                </div>

                <div className={(subsciptionPlanIndex==2)?"basic boxSHadow":"basic "} onClick={()=>{setSubscriptionPlanIndex(2);props.handleSubsciption("basic","199")}}>
                    <div className={(subsciptionPlanIndex==2)?"basic-top-color basic-top-color-active":"basic-top-color"}>Most Popular</div>
                    <div className="subscription-package-inner-div">
                        <div className="subscription-package-inner-div">

                        <div className="subscription-price-container d-flex align-items-center mb-3">

                           {(subsciptionPlanIndex==2)?  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#501dc9",width:"15px",height:"15px",borderRadius:"50%"}} />
                           : <span style={{border:"1px solid grey",width:"15px",height:"15px",borderRadius:"50%"}}></span>}

                            <div className="price-and-pack-name d-flex flex-column">
                                <span className="pack-name fw-bold" style={{fontSize:"1.1em"}}>Basic</span>
                                <span className="mo-price fw-bold" style={{color:" rgb(80, 85, 85)",fontSize:"1.04em"}}>₹ 199/mo.</span>
                            </div>
                        </div>

                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==2)?"basic-circle-color":""} />
                            <span className={(subsciptionPlanIndex==2)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Good video and sound quality</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==2)?"basic-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==2)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >720p resolution</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==2)?"basic-circle-color":""} />           
                            <span className={(subsciptionPlanIndex==2)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Watch on your TV, computer, mobile phone and tablet</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==2)?"basic-circle-color":""} />  
                            <span className={(subsciptionPlanIndex==2)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >1 device for your household to watch at a time</span>
                        </div>
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==2)?"basic-circle-color":""} />
                            <span className={(subsciptionPlanIndex==2)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >1 download device</span>
                        </div>
                        

                    </div>

                    </div>
                    
                </div>

                <div className={(subsciptionPlanIndex==3)?"mobile boxSHadow":"mobile "} onClick={()=>{setSubscriptionPlanIndex(3);props.handleSubsciption("mobile","149")}}>
                <div  className={(subsciptionPlanIndex==3)?"mobile-top-color subsciption-top-color":"subsciption-top-color"}></div>

                    <div className="subscription-package-inner-div">
                        <div className="subscription-package-inner-div">

                        <div className="subscription-price-container d-flex align-items-center mb-3">
                         
                          {(subsciptionPlanIndex==3)?  <FontAwesomeIcon icon={faCircleCheck} style={{color: "#0a64f5",width:"15px",height:"15px",borderRadius:"50%"}} />
                           : <span style={{border:"1px solid grey",width:"15px",height:"15px",borderRadius:"50%"}}></span>}

                            <div className="price-and-pack-name d-flex flex-column">
                                <span className="pack-name fw-bold" style={{fontSize:"1.1em"}}>Mobile</span>
                                <span className="mo-price fw-bold" style={{color:" rgb(80, 85, 85)",fontSize:"1.04em"}}>₹ 149/mo.</span>
                            </div>
                        </div>

                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==3)?"mobile-circle-color":""} />
                            <span className={(subsciptionPlanIndex==3)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Fair video and sound quality</span>
                        </div>
                                           
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==3)?"mobile-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==3)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >480p resolution</span>
                        </div>
                        
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==3)?"mobile-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==3)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >Watch on your mobile phone and tablet</span>
                        </div>
                        
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==3)?"mobile-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==3)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >1 device for your household to watch at a time</span>
                        </div>
                        
                        <div className="subscription-information-container d-flex align-items-baseline">
                            <FontAwesomeIcon icon={faCircle} style={{color: "#454545",width:"7px",height:"6px"}} className={(subsciptionPlanIndex==3)?"mobile-circle-color":""} />                          
                            <span className={(subsciptionPlanIndex==3)?"text-dark":"subscrip-info-span"} style={{fontSize:"0.9em"}} >1 download device</span>
                        </div>


                    </div>
                        
                    </div>
                    
                </div>
            </div>

            <p style={{fontSize:"0.84em",color:"grey",width:"95%"}}>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <a  onClick={()=>{tonavigate('/TermsOfUse')}} className="text-decoration-none subscrip-a-tag-hover">Terms of Use</a> for more details.
            </p>

            <p style={{fontSize:"0.84em",color:"grey",width:"95%"}}>
            Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.
            </p>

            <button className="subscription-next-btn text-white fw-bold py-3" onClick={()=>{tonavigate('/JoinNowFour')}}>Next</button>

            </div>
        </section>
        </>
    )
}
export default JoinNowThreeSection;
