import TermsOfUseSectionPrint from "../TermsOfUse/TermsOfUseSectionPrint";
import "./LegalNoticeSection.css";
import { Navigate, useNavigate } from "react-router-dom";


function LegalNoticeSection(){

        let Navigate=useNavigate();

    
    return(
        <>
        <section className="LegalNotice-section">
            <TermsOfUseSectionPrint/>

            <h1 className="LegalNotice-section-h1">Legal Notices</h1> 

            <p>The Netflix service, including all content provided on the Netflix service, is protected by copyright, trademark, trade secret or other intellectual property laws and treaties.</p>
            <br/>

            <p>
                <strong>Copyright</strong> <br/>
                The copyrights in the shows and movies on our service are owned by many great producers, including Netflix Studios, LLC. If you believe your or someone else’s copyrights are being infringed upon through the Netflix service, let us know by completing the Copyright Infringement Claims form ( <a onClick={()=>{Navigate('/Privacy')}} className="text-danger text-decoration-none">www.netflix.com/copyrights</a>).
            </p>
            <br/>

            <p className="lh-lg"> <strong>Trademarks</strong> <br/>
            Netflix and the N Logo are trademarks of Netflix, Inc. <br/>
            If you haven’t received our permission, do not use the Netflix marks as your own or in any manner that implies sponsorship or endorsement by Netflix. <br/>
            A product branded with the Netflix name or logo is a reflection of Netflix. Unless you are one of our licensees, we don’t allow others to make, sell, or give away anything with our name or logo on it.
            </p>

            <br/>

              <p> <strong>Patents</strong> <br/>
              Netflix streaming and DVD services are covered by patents. For information on patents related to our services please visit <a href="#" className="text-danger text-decoration-none">www.netflix.com/patents.</a>
            </p>

            <br/>

              <p> <strong>Third Party Notices</strong> <br/>
              The software installed on Netflix ready devices to enable streaming of the Netflix service may contain software available under open source or free software licenses (“Open Source Software”) and/or commercial software licensed to Netflix by parties (“Commercial Software”). The Netflix Terms of Use do not alter any rights or obligations you may have under those Open Source Software licenses. Additional information about Open Source and Commercial Software, including required acknowledgements, license terms and notices, can be found <a onClick={()=>{Navigate('/Privacy')}} className="text-danger text-decoration-none">here</a>.
            </p>

            <br/>

              <p> <strong>Last Updated:</strong> May 11, 2018 </p>
            <br/>

        
        
        
        
        </section>
        </>
    )
}
export default LegalNoticeSection;
