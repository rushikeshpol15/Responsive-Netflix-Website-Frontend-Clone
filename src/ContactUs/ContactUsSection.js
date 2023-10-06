import { useState } from 'react';
import TermsOfUseSectionPrint from '../TermsOfUse/TermsOfUseSectionPrint';
import './ContactUsSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faCircleQuestion } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';

function ContactUsSection()
{
    let[focus,setFocus]=useState(false);

    function handleFocus(e)
    {
        if(e.length>0)
        {
            setFocus(true);
        }
        else{
            setFocus(false);
        }
    }
    return(
        <>
        <section className='Contact-section'>
            <div className='Contact-container m-sm-auto'>
                <div className='Contact-row '>

                    <h1>Contact us</h1>

                    <div className='mb-3'>
                        <h6 className='fw-bold'>Tell us more and we'll find the best solution for you</h6> 
                        <input type='text' placeholder='Describe your issue'  onChange={(e)=>{handleFocus(e.target.value)}} className={(focus)?'Contact-input form-control is-valid':"Contact-input"}/>
                    </div>

                    <h6 className='fw-bold'>Quick Links</h6> 

                    <ul className='list-group list-group-flush'>

                        <li className='list-group-item d-flex align-items-center'>
                            <span className='me-auto'>
                            <FontAwesomeIcon icon={faCircleExclamation} style={{color: "#707070",marginRight:"10px"}} />
                            <a href='#' className='text-secondary text-decoration-none'>Content Grievances in India</a>
                            </span>
                            <FontAwesomeIcon icon={faGreaterThan} style={{color: "#de1b1b",width:"10px"}} />
                        </li>

                        <li className='list-group-item d-flex align-items-center'>
                            <span className='me-auto'>
                            <FontAwesomeIcon icon={faLock} style={{color: "#595959",marginRight:"12px"}} />
                            <a href='#' className='text-secondary text-decoration-none'>Reset password</a>
                            </span>
                            <FontAwesomeIcon icon={faGreaterThan} style={{color: "#de1b1b",width:"10px"}} />
                        </li>

                        <li className='list-group-item d-flex align-items-center'>
                            <span className='me-auto'>
                            <FontAwesomeIcon icon={faEnvelope} style={{color: "#696969",marginRight:"10px"}} />
                            <a href='#' className='text-secondary text-decoration-none'>Update email</a>
                            </span>
                            <FontAwesomeIcon icon={faGreaterThan} style={{color: "#de1b1b",width:"10px"}} />
                        </li>

                        <li className='list-group-item d-flex align-items-center'>
                            <span className='me-auto'>
                            <FontAwesomeIcon icon={faCircleQuestion} style={{color: "#919191",marginRight:"10px",height:"17px"}} />
                            <a href='#' className='text-secondary text-decoration-none'>Get help signing in</a>
                            </span>
                            <FontAwesomeIcon icon={faGreaterThan} style={{color: "#de1b1b",width:"10px"}} />
                        </li>

                        <li className='list-group-item d-flex align-items-center'>
                            <span className='me-auto'>
                            <FontAwesomeIcon icon={faCreditCard} style={{color: "#808080",marginRight:"10px"}} />
                            <a href='#' className='text-secondary text-decoration-none'>Update payment method</a>
                            </span>
                            <FontAwesomeIcon icon={faGreaterThan} style={{color: "#de1b1b",width:"10px"}} />
                        </li>

                        <li className='list-group-item d-flex align-items-center'>
                            <span className='me-auto'>
                            <FontAwesomeIcon icon={faTv} style={{color: "#7a7a7a",marginRight:"10px"}} />
                            <a href='#' className='text-secondary text-decoration-none'>Request TV shows or movies</a>
                            </span>
                            <FontAwesomeIcon icon={faGreaterThan} style={{color: "#de1b1b",width:"10px"}} />
                        </li>





                    </ul>



                </div>
            </div>
        </section>
        </>
    )
}
export default ContactUsSection;