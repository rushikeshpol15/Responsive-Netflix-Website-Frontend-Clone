import "./Jobs.css";
import IMGOne from "./Jobs-container-fluid-one.jpg";
import ImgTwo from "./Jobs-container-fluid-two.jpg";
import InnerImgOne from "./small-container-img-one.png";
import InnerImgTwo from "./small-container-img-two.jpg";
import InnerImgThree from "./small-container-img-three.png";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardImg from "./Job-card-image.png";
import { useState } from "react";

function JobsSection()
{
  let[iframeOneState,setIframeOneState]=useState(false);
  let[iframeTwoState,setIframeTwoState]=useState(false);
  let[iframeThreeState,setIframeThreeState]=useState(false);


  
    return(
        <>
        <section className="Jobs-section">

            <div className="Jobs-section-container">
                
                    <div className="Jobs-section-subcontainer-one">
                      <div className="Jobs-section-subcontainers-padding">
                         <h2 className="text-dark fw-bold mb-3">Freedom and Responsibility</h2>
                         <p className="mb-4">Our core philosophy is people over process. Our culture has been instrumental to our success and has helped us attract and retain stunning colleagues, making work here more satisfying.</p>
                         <span className="span-red-btn py-2 px-2 py-sm-2 px-sm-3">READ ABOUT OUR CULTURE  &gt;</span>
                      </div>
                    </div>
                    <div className="Jobs-section-subcontainer-two">
                        <img src={IMGOne} alt="img" className="img-fluid"/>
                    </div>
            </div>

            <div className="Jobs-section-container second">
                
                 <div className="Jobs-section-subcontainer-three">
                   <img src={ImgTwo} alt="img" className="subcontainer-img"/>
                 </div>
                <div className="Jobs-section-subcontainer-four">
                  <div className="Jobs-section-subcontainers-padding">
                    <h2 className="text-white fw-bold mb-3">Streaming entertainment. Global original content. Product personalization.</h2>
                    <p className="mb-4 text-white">
                    Our first original series debuted in 2013. Over the following decades, Streaming TV will replace linear, and we hope to keep leading by offering an amazing entertainment experience.</p>
                    <span className="span-red-btn py-2 px-2 py-sm-2 px-sm-3">SEE WHAT'S NEXT  &gt;</span>
                  </div>
                </div>
               
          </div>

          <h2 className="fw-bold text-center">Latest From Netflix</h2>
          { iframeOneState? <IFrame iframeLink={"https://www.youtube.com/embed/RJNnghJpfrM?si=LuESAdhFoEn_uPTq"} iframeState={iframeOneState} setState={setIframeOneState}/> : null}
          { iframeTwoState? <IFrame iframeLink={"https://www.youtube.com/embed/theDAEYSKFE?si=hbgIjU_ZEPOhNbUa"}  iframeState={iframeTwoState} setState={setIframeTwoState}/> : null}
          { iframeThreeState? <IFrame iframeLink={"https://www.youtube.com/embed/LbnoybzV3VU?si=4xqjEzleW45e7rkX"} iframeState={iframeThreeState} setState={setIframeThreeState}/> : null}


          <div className="small-container m-auto">

                    <div className="small-container-column" onClick={()=>{setIframeOneState(!iframeOneState)}}>
                    <FontAwesomeIcon icon={faCirclePlay} style={{color: "#fcfcfd", width:"100px", height:"60px", position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%"}} />
                       <img src={InnerImgOne} alt="img" className="absolute-img"/>
                    </div>

                     <div className="small-container-column" onClick={()=>{setIframeTwoState(!iframeTwoState)}}>
                     <FontAwesomeIcon icon={faCirclePlay} style={{color: "#fcfcfd", width:"100px", height:"60px", position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%"}} />
                        <img src={InnerImgTwo} alt="img" className="absolute-img"/>
                            
                    </div>

                    <div className="small-container-column" onClick={()=>{setIframeThreeState(!iframeThreeState)}}>
                    <FontAwesomeIcon icon={faCirclePlay} style={{color: "#fcfcfd", width:"100px", height:"60px", position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%"}} />
                     <img src={InnerImgThree} alt="img" className=" absolute-img"/>
                            
                    </div>

          </div>

          <div className="Jobs-card-container mt-5 m-auto ">
                <div className="p-4 border rounded shadow">
                    <span className="text-muted border-start border-2 border-danger ps-2">TECH BLOG</span>
                    <h2 className="fw-bold mt-4">Zero Configuration Service Mesh with On-Demand Cluster Discovery</h2>
                    <p>by David Vroom, James Mulcahy, Ling Yuan, Rob Gulewich</p>
                    <br/>
                    <p>In this post we discuss Netflix’s adoption of service mesh: some history, motivations, and how we worked with Kinvolk and the Envoy community on a feature that streamlines service mesh adoption in complex microservice environments: on-demand cluster discovery.</p>
                    <h3 className="fw-bold">A brief history of IPC at Netflix</h3>
                    <p className="mb-4">Netflix was early to the cloud, particularly for large-scale companies: we began the migration in 2008, and by 2010,</p>
                    <span className="text-white px-3 py-2" style={{backgroundColor:" rgb(211, 7, 7)",cursor:"pointer"}}>READ MORE &gt;</span>
                </div>

                <div className="p-4 border rounded shadow">
                    <span className="text-muted border-start border-2 border-danger ps-2">COMPANY NEWSROOM</span>
                    <h2 className="fw-bold my-4">Top 10 Week of Aug. 28: 'ONE PIECE’ and ‘You Are So Not Invited to My Bat Mitzvah’ Nab the Top Spots</h2>
                    <img src={CardImg} alt="img" className="img-fluid mb-3"/>
                    <div className="mb-3"><strong>Entertainment · </strong>05 September 2023</div>
                    <span className="text-dark border border-dark rounded py-1 px-2 fw-bold">Global</span>
                    <br/> <br/>
                    <span className="text-white px-3 py-2" style={{backgroundColor:" rgb(211, 7, 7)",cursor:"pointer"}}>READ MORE &gt;</span>

                </div>
          </div>

        </section>
        </>
    )
}

function IFrame(props)
{
  return(
    <>
    <div className="forIframe d-flex justify-content-center align-items-center">
      <div className="innerIFrame m-auto d-flex justofy-content-between">
      <iframe width={"96%"} height={"100%"} src={props.iframeLink} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" />
      <button className="btn-close bg-light" onClick={()=>{props.setState(!props.iframeState)}}></button>
      </div>
      </div>
    </>
  )
}

export default JobsSection;