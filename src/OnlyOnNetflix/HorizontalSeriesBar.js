import "./OnlyOnNetflix.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft,faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";
import NewReleaseArr from "./NewReleaseArr";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
let index2=20;
let index3=40;
let index4=60;

function HorizontalSeriesBar({Catagory,seriesArr})
{
    
    let horizontalDiv=useRef(null);
    let [leftSlide,setLeftSlide]=useState(false);
    let[title,setTitle]=useState("");
    let[BgImage,setBGImage] =useState("");
    let[Starring,setStarring]=useState("");
    let[Creators,setCreators]=useState("");
    let[titleImage,setTitleImage]=useState("");
    let[para,setPAra]=useState("");
    let[greyBox,setGreyBox]=useState([]);


    function MoveRight()
    {
        horizontalDiv.current.scrollLeft = horizontalDiv.current.scrollLeft + (window.screen.width-50);
    }
    function MoveLeft()
    {
        horizontalDiv.current.scrollLeft = horizontalDiv.current.scrollLeft - (window.screen.width-50);
        
          
        
    }

    function handleInformationDiv(element)
    {
        setTitle(element.title);
        setBGImage(element.BgImage);
        setStarring(element.Starring);
        setCreators(element.Creators);
        setTitleImage(element.titleImage);
        setPAra(element.para);
        setGreyBox(element.greyBox);

        setLeftSlide(true);

    }

    return(
        <>

            <div className="only-on-netflix-scroll-parent-box">
                <div className="text-white pb-2" style={{fontSize:"1.3em"}}>{Catagory}</div>

                <div className={(leftSlide)?"only-on-netflix-scroll-box leftSlide":"only-on-netflix-scroll-box"}>

                    <div className="only-on-netflix-after-onCLick-div ">

                        <div className="close-onclick-opened-div text-end pe-3 pt-2" style={{backgroundColor: "rgba(43, 42, 42)"}}>
                        <FontAwesomeIcon icon={faXmark} style={{color: "#f9fafa",height:"30px",cursor:"pointer"}} onClick={()=>{setLeftSlide(false)}} className="close-onclick-opened-div-FA"/>
                        </div>

                        <div className="only-on-netflix-onclick-inner-div-one">
                            <img className="onClick-inner-title-image img-fluid mb-4" src={titleImage} alt="img" width="93%"/>
                            <h5 className="text-white fw-bold mb-3">{title}</h5>
                            <div className="onClick-inner-box-grey-box-container mb-4 d-flex flex-wrap " style={{gap:"0.8em"}}>
                                {
                                    greyBox.map((elment,index)=>{
                                        return <div className="onClick-inner-box-grey-box "> <span className={(index==1)?"grey-box-span grey-box-UA":"grey-box-span"} >{elment}</span> </div>
                                    })
                                }
                            </div>
                            <p className="onClick-inner-div-para text-white">{para}</p>
                        {(Starring.length>0)? <div className="text-white"><span className="Starring ">Starring:</span> {Starring}</div>:null}
                        {(Creators.length>0)? <div className="text-white"><span className="Creators ">Creators:</span> {Creators}</div>:null}
                        </div>

                        <div className="only-on-netflix-onclick-inner-div-two">
                            {/* <div className="dark-layer"> */}
                                <img className="only-on-netflix-onclick-inner-div-two-img img-fluid" style={{position:"relative",zIndex:"-1"}} src={BgImage} alt="img" width="100%"/>
                            {/* </div>     */}
                        </div>
                        
                </div>
                </div>

            <div className="series-horizontal-bar" ref={horizontalDiv}>
                {
                   
                    seriesArr.map((element,index)=>{
                        
                       return <>
                        <div className="series-box" key={index} onClick={()=>{handleInformationDiv(element)}}>
                            <img className="series-img-box img-fluid" src={element.BgImage} alt={element.title}  width="100%" key={element.BgImage}/>
                            <img className="series-title-image" src={element.titleImage}  alt={element.title} key={element.titleImage} />
                            <div className="small-box-title-span text-white text-center"  style={{fontSize:"1.09em"}} key={element.title} >  {element.title}    </div>
                        </div>
                        </>                      
                    })
                }
            </div>
            <FontAwesomeIcon icon={faChevronLeft} style={{color: "#fb0429",}} className="faChevronLeft-FA" onClick={()=>{MoveLeft()}} />
            <FontAwesomeIcon icon={faChevronRight} style={{color: "#f10920",}} className="faChevronRight-FA" onClick={()=>{MoveRight()}} />
        </div>
        </>
    )
}
export default HorizontalSeriesBar;