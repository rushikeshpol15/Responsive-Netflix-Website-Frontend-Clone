import "./MediaCenter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo ,faPhotoFilm,faFilm,faFileVideo,faXmark} from "@fortawesome/free-solid-svg-icons";
import RealityArr from "./RealityArr";
import DocumentoryArr from "./DocumentoryArr";
import SeriesArr from "./SeriesArr";
import FilmArr from "./FilmArr";
import { useState } from "react";
function MediaCenterSection()
{
    let[HThreeState,setHThreeState]=useState("");
    let[HFiveState,setHFiveState]=useState("");
    let[ParagraphState,setParagraphState]=useState("");
    let[redBoxState,setRedBoxState]=useState([]);
    let[imageState,setImageState]=useState("");
    let[onClickBox,setOnClickBox]=useState(false);

    function handleImageClick(HThtree,HFive,Paragraph,redBox,bgImage)
    {
        setHThreeState(HThtree);
        setHFiveState(HFive);
        setParagraphState(Paragraph);
        setRedBoxState(redBox);
        setImageState(bgImage);
        setOnClickBox(true);

    }
    return(
        <>
{/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  Launch static backdrop modal
</button> */}

<div className="modal fade" id="EstaticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog modal-dialog-centered modal-width modal-xl ">
    <div className="modal-content onclick-parent-div ">

      <div className="modal-header border-bottom-Zero">
        <h5 className="modal-title" id="staticBackdropLabel"></h5>
        <FontAwesomeIcon icon={faXmark} style={{color: "#f9fafb",height:"30px",cursor:"pointer"}} data-bs-dismiss="modal" aria-label="Close"/>  
      </div>

      <div className="modal-body onclick-child-div">

            <div className="onclick-child-one">
                <h3 className="fw-bold" style={{ color: "lightgray", marginBottom: "0.7em" }}>{HThreeState}</h3>
                <h5 className="fw-bold" style={{ color: "lightgray" }}>{HFiveState}</h5>

                <div className="onclick-child-one-synopsis-box">
                    <span className="fw-bold synopsys-text">Synopsis</span>
                    <p style={{ fontSize: "0.9em", color: "lightgrey", marginTop: "1em", lineHeight: "1.8em" }}>
                        {ParagraphState}
                    </p>
                    <div className="onclick-red-boxes-div">
                        {
                            redBoxState.map((element) => {
                                 return <span key={element} className="onclick-red-box">{element}</span>
                            })
                        }
                    </div>

                </div>
            </div>

            <div className="onclick-child-two">
                <img src={imageState} alt="img" className="img-fluid onclick-abs-img" />
            </div>

      </div>
    </div>
  </div>
</div>


        <section className="media-center-section">

     {/* {(onClickBox)?   <div className="onclick-parent-div">

            <div className="text-end p-2 ">
               <FontAwesomeIcon icon={faXmark} style={{color: "#f9fafb",height:"30px",cursor:"pointer"}} onClick={()=>{setOnClickBox(false)}}/>  
            </div>

            <div className="onclick-child-div">
                    <div className="onclick-child-one">
                            <h3 className="fw-bold" style={{color:"lightgray",marginBottom:"0.7em"}}>{HThreeState}</h3>
                            <h5 className="fw-bold" style={{color:"lightgray"}}>{HFiveState}</h5>

                            <div className="onclick-child-one-synopsis-box">
                                <span className="fw-bold synopsys-text">Synopsis</span>
                                <p style={{fontSize:"0.9em",color:"lightgrey",marginTop:"1em",lineHeight:"1.8em"}}>
                                    {ParagraphState}
                                </p>
                                <div className="onclick-red-boxes-div">
                                    {
                                        redBoxState.map((element)=>{
                                          return  <span key={element} className="onclick-red-box">{element}</span>
                                        })
                                    }
                                </div>

                            </div>
                    </div>

                    <div className="onclick-child-two">
                        <img src={imageState} alt="img" className="img-fluid onclick-abs-img"/>
                    </div>
            </div>

        </div>:null} */}

        <div className="media-center-nav-tab-box">
            <span className="mediaCenter-navTabs-Span-Text text-white fw-bold"> I'm interested in covering titles releasing in October</span>
            
            <div className="nav nav-tabs media-center-nav-tab-inner-box" id="nav-tab" role="tablist">
                <button className="nav-link media-center-nav-tabs-btns active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#Film" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                <FontAwesomeIcon icon={faVideo} style={{color: "#f5f7f9",marginRight:"5px"}} />
                Film
                </button>

                <button className="nav-link media-center-nav-tabs-btns" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#Series" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                <FontAwesomeIcon icon={faPhotoFilm} style={{color: "#f0f2f4",marginRight:"5px"}} />
                    Series
                </button>

                <button className="nav-link media-center-nav-tabs-btns" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Documentory" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                <FontAwesomeIcon icon={faFilm} style={{color: "#f3f4f7",marginRight:"5px"}} />
                    Documentory
                </button>

                <button className="nav-link media-center-nav-tabs-btns" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#Reality" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                <FontAwesomeIcon icon={faFileVideo} style={{color: "#edeff2",marginRight:"5px"}} />
                    Reality
                </button>
           
            </div>
        </div>
        
        <div className="media-center-section-tab-btm-border"></div>

        <div className="tab-content media-center-bg-color" id="nav-tabContent">

            <div className="tab-pane fade show active" id="Film" role="tabpanel" aria-labelledby="nav-home-tab">
                <div className="media-center-tab-content-grid-container">
                    
                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[0].HThree,FilmArr[0].HFive,FilmArr[0].paragraph,FilmArr[0].redBox,FilmArr[0].bgImage)}}  data-bs-toggle="modal" data-bs-target="#EstaticBackdrop" >
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeXvo6sN1u3kNNiV0goCtyoEUKyg6NURhBZhOy0UtGBzPGLLefJGV8ONvvbf2LvyOS9EQ7ZjEA_UlCLPQgWyVuUcPYt8BmDguGKjQoS9iABVwz7bSo7OPMjLeYUV9oupHenlVQ.jpg?r=d86" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 4, 2023</span>
                    </div>       

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[1].HThree,FilmArr[1].HFive,FilmArr[1].paragraph,FilmArr[1].redBox,FilmArr[1].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABe0xTi84846YQcdM-8twL3sDB40nE5znXbHGSqEUV65pK5j7MBVQwwySV1r2u1_4YVDLq2yCvNOdyKez6JylbA4GvY6ats24o-Z6QkgTXn7XhQQ7kKXXLsjjuMnaLWaeF7neGg.jpg?r=488" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 6, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[2].HThree,FilmArr[2].HFive,FilmArr[2].paragraph,FilmArr[2].redBox,FilmArr[2].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVwVSAmTuZfn7JPl5QJtHx1l5Y5-c-PXF0nUiUlq_yNm0gioORg6PA_bPr01sI2txQEsIewDZdRN6DfRgxjTuqX3B6cggF8pK8vv9cjmRA8v7XUmpNl_NLbOWPvQngjqEzWDVw.jpg?r=e30" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 6, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[3].HThree,FilmArr[3].HFive,FilmArr[3].paragraph,FilmArr[3].redBox,FilmArr[3].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTC2JsuNgSQgERC4agDGf6dogj_kAv-Gox_jgmPIfSeB-wKve6yn5LbXA6lw26OUm0dzzXG0VLmUeajNYBRQ9hSHauFRxVCYXxhylk5YmplXSGSaqxyz9c1KWBmN0fgmNK6kSQ.jpg?r=c6c" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 6, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[4].HThree,FilmArr[4].HFive,FilmArr[4].paragraph,FilmArr[4].redBox,FilmArr[4].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABSNd5QhrqXmTBghg7U7gzIwB_QKljKW3YcTLkWN9ZgyqFNTzyGzWqMsoNUBFFQWi5Ew89m6DmNv6eUcUFW3UzKfVo1MsKL8Y2N5wTgmA0Abov13DBt9d4pKTb-CbOmAxvNanRg.jpg?r=3b3" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 11, 2023</span>
                    </div>


                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[5].HThree,FilmArr[5].HFive,FilmArr[5].paragraph,FilmArr[5].redBox,FilmArr[5].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop" >
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYhLR_ssmWcMQH7qBWX6j1Oiun2uKzJZNC5pfjvmj9IJvaNNLePUL8o2deUiVjVLkzw3um0TA1QHwHTJhLi3GS8qc4WJWB5WByEmKvhw288SEz6tBDcS4ld7nXKUKyolS6GhSQ.jpg?r=cb8" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 13, 2023</span>
                    </div>


                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[6].HThree,FilmArr[6].HFive,FilmArr[6].paragraph,FilmArr[6].redBox,FilmArr[6].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTkhHwJDHQe8ZbFaXj-cW_G7bMpPYhoDY2nX7uBowikASvfq2f1jBIh4jJ92KJwnGb5yJpSexJO35b2fZYKN_Kr_G-gYXo56rdeorvbXtKwj3DUaccSKyq0bnojiSLfM5_TlwQ.jpg?r=01f" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 17, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[7].HThree,FilmArr[7].HFive,FilmArr[7].paragraph,FilmArr[7].redBox,FilmArr[7].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRE2G1-gaqRAlv9ZVleHAsJYZvQRzUt2kV2tC_PU8Cx4HYoBoiF2x29mGkAhYoxNOVLkcKQzXJVLyNAPeoPOYVgUT91QpRexnBMOYXTWDYhtbnIdNbA4cFcUO7zMoEijn9dttQ.jpg?r=0aa" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 19, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[8].HThree,FilmArr[8].HFive,FilmArr[8].paragraph,FilmArr[8].redBox,FilmArr[8].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABQjHjNiUiUpFAwS3J0UiOL-HN50jyLRJUXIVQNMnubz-czh6F__YcKf70DiBiASpQjk0LMAMtO4wAsP5drdpCqqZLPUFEjy8Gd7BwzNlEjbJvSXE0Aon4i_pU6rlwC-LxQsp2A.jpg?r=272" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 20, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[9].HThree,FilmArr[9].HFive,FilmArr[9].paragraph,FilmArr[9].redBox,FilmArr[9].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABbzr-gKB2C-LACw7H4yLGOwQMUMWJ4u2D091RxngeL_5lk7W4QmMGB7_2CtvDCXbQNz2jO-9eYdSFFReBCL_0K2nBCJPmCJlRcb3xITXxOiQl6KdvZ8El7UjVGtHdHzxsq7uZg.jpg?r=e16" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 20, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick( FilmArr[10].HThree,FilmArr[10].HFive,FilmArr[10].paragraph,FilmArr[10].redBox,FilmArr[10].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://d2ajy4iry6zk4j.cloudfront.net/pubvat/81614419/thumbnail/small/fkedgybn9" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 27, 2023</span>
                    </div>

                </div>
                <div className="mt-5 text-center">
                    <a  className="november-titles">Show November titles</a>
                    </div>
            </div>

        <div className="tab-pane fade" id="Series" role="tabpanel" aria-labelledby="nav-profile-tab">
            
        <div className="media-center-tab-content-grid-container">
                    
                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[0].HThree,SeriesArr[0].HFive,SeriesArr[0].paragraph,SeriesArr[0].redBox,SeriesArr[0].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZX4fcQMzH1EkX-PZqHC-1003xaXsE2VEMPtYpXz1CMhaJPCdeoJl5P4hJ6_wQhAjzxqoOx9QhGGdSpnHcLHeQmQq1MFSw5zPwjXb4gTG5En6DEdBLje8kol9GnUZeQVsAPk5A.jpg?r=01f" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 4, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[1].HThree,SeriesArr[1].HFive,SeriesArr[1].paragraph,SeriesArr[1].redBox,SeriesArr[1].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYZ4a3X1GYI7Vc4DxzVcB20OXqYx8LPP0BPXdJIJ47xenCLEaXOq6y6S4X5GFhYvbV08uzR7a9RbYcUDPluzSTu8FfPaYU6q1SXEAfNSpwU5bPLk0O2771y_OuEztisE-GYb_A.jpg?r=0d7" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 5, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[2].HThree,SeriesArr[2].HFive,SeriesArr[2].paragraph,SeriesArr[2].redBox,SeriesArr[2].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABVM8lQp1C7nw6Xny1jLrRb38xC5Ti7cdbefBOEHN-rpgW9QGiyeW8cMni8hGUREv1AXYz-qzEz1MN5ZOePWOG71znjTRei5OYJUdS0IhvWSeFEG2C2HuUHbMmN31L9nX4XcMNg.jpg?r=057" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 5, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[3].HThree,SeriesArr[3].HFive,SeriesArr[3].paragraph,SeriesArr[3].redBox,SeriesArr[3].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABfyTK-92AZ0o09O6N_GLuYc7a72UgOj3Tbvgt9tzzvoSJv1NFNPfaDCDYgNaSxRghkp8ngot9tl6vnM5lRtPJ8GjXh3Df48hi8ZncG1gor8xn9FNXXzrSmTSHf3QHdKOnKNMtg.jpg?r=a01" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 10, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[4].HThree,SeriesArr[4].HFive,SeriesArr[4].paragraph,SeriesArr[4].redBox,SeriesArr[4].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABcDzJWIElLyVImnTL3eHOoMXCJnYyPz4w1QVYoHpYODWRLrC8ac3D10LOyNJxxFLbzNVh7uMoCaxBiIxXB2rUiBKQoZZvGZJTV18_MNiuTe6rUShJWNInTqQ1VJZSeTzAQG0fg.jpg?r=45d" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 19, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[5].HThree,SeriesArr[5].HFive,SeriesArr[5].paragraph,SeriesArr[5].redBox,SeriesArr[5].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZe7OzFNHyKBJ8GAMOYm25-d7hZxL98MUbYYWhReQALQERWyXKoKuLlzq5WYzsWxMfmQ8s3nGonK6tFjN7QEMuqWz4luffI79dFuK76kxos36iMS9HhMu15JqP_vc-qrBsFjcA.jpg?r=50a" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 20, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[6].HThree,SeriesArr[6].HFive,SeriesArr[6].paragraph,SeriesArr[6].redBox,SeriesArr[6].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZs5naIk5Kyg_pfooXgy3hp1hHGEJxHej_9Y2vIgTXDVfWEimt_yr7SPVWffvkiUAgb-2fLrNmS3bZAPRzIh0jx-ZdiJfIIA6uVXn4jm7Fv7E9W8ya_SdSxYDk4DNM03kWIErg.jpg?r=880" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 20, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[7].HThree,SeriesArr[7].HFive,SeriesArr[7].paragraph,SeriesArr[7].redBox,SeriesArr[7].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://d2ajy4iry6zk4j.cloudfront.net/pubvat/80200942/thumbnail/small/fkbpq4rmv" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 20, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[8].HThree,SeriesArr[8].HFive,SeriesArr[8].paragraph,SeriesArr[8].redBox,SeriesArr[8].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRVOOTuYY0lKaUU40FlJA3xyocRxr3FMp7NYMgwE_hG1oZibbCx4a-6LE6smO_Is_ranJVXePI-ipBPdylCURqU3OQtLm6NsMW943FLu7qrGO_DMcqwGwppjNn7tC_EckbRWLQ.jpg?r=d48" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 25, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[9].HThree,SeriesArr[9].HFive,SeriesArr[9].paragraph,SeriesArr[9].redBox,SeriesArr[9].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABYF4pJNI6eBWU-8-g0OxZizEMfWgS--Vq4JuoHsrkttBZsRLbiziTcd0rDCXk3I2CrMGdgt4RZNUD28BVHiFGx_9nOQAtI0C921VLSY4yti4CPZeDKeG9V8rH5h8RKvETGHDwQ.jpg?r=f47" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 26, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick(SeriesArr[10].HThree,SeriesArr[10].HFive,SeriesArr[10].paragraph,SeriesArr[10].redBox,SeriesArr[10].bgImage )}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/Kc8CA9GHHouTKoU4bM9l5VW4DIA/AAAABd1SzzzN35zgCSRwkLUZax0mtHyUitMDV-NPOHfaoJpdVaiqDVnXJxA3fPPuaYb2twaIWF70HBjnPONuBz1iQTeCFYVNm_evXdBlh_xE2ztkRV6bOOIXcTZSt7Ih_t2sx24-VOgFIQ.jpg" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 27, 2023</span>
                    </div>

                </div>

                     <div className="mt-5 text-center">
                    <a  className="november-titles">Show November titles</a>
                    </div>
            </div>

        <div className="tab-pane fade" id="Documentory" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div className="media-center-tab-content-grid-container">

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{ handleImageClick( DocumentoryArr[0].HThree,DocumentoryArr[0].HFive,DocumentoryArr[0].paragraph,DocumentoryArr[0].redBox ,DocumentoryArr[0].bgImage)   }} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZX4fcQMzH1EkX-PZqHC-1003xaXsE2VEMPtYpXz1CMhaJPCdeoJl5P4hJ6_wQhAjzxqoOx9QhGGdSpnHcLHeQmQq1MFSw5zPwjXb4gTG5En6DEdBLje8kol9GnUZeQVsAPk5A.jpg?r=01f" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 4, 2023</span>
                    </div>
            
                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}}  onClick={()=>{ handleImageClick( DocumentoryArr[1].HThree,DocumentoryArr[1].HFive,DocumentoryArr[1].paragraph,DocumentoryArr[1].redBox ,DocumentoryArr[1].bgImage)   }} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABeXvo6sN1u3kNNiV0goCtyoEUKyg6NURhBZhOy0UtGBzPGLLefJGV8ONvvbf2LvyOS9EQ7ZjEA_UlCLPQgWyVuUcPYt8BmDguGKjQoS9iABVwz7bSo7OPMjLeYUV9oupHenlVQ.jpg?r=d86" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 4, 2023</span>
                    </div>
                    
                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}}  onClick={()=>{ handleImageClick( DocumentoryArr[2].HThree,DocumentoryArr[2].HFive,DocumentoryArr[2].paragraph,DocumentoryArr[2].redBox ,DocumentoryArr[2].bgImage)   }} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABaOy3oVJrYzhLA-uw41hsjSs9NFNtaX36hFQPeVf39qOrt9W7acY8EpbAWORJZfWIzv7HVzDBMdj18Fx_LkTrX1NaVk64Ar-WamL.jpg?r=cb6" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 11, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}}  onClick={()=>{ handleImageClick( DocumentoryArr[3].HThree,DocumentoryArr[3].HFive,DocumentoryArr[3].paragraph,DocumentoryArr[3].redBox ,DocumentoryArr[3].bgImage)   }} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABTkhHwJDHQe8ZbFaXj-cW_G7bMpPYhoDY2nX7uBowikASvfq2f1jBIh4jJ92KJwnGb5yJpSexJO35b2fZYKN_Kr_G-gYXo56rdeorvbXtKwj3DUaccSKyq0bnojiSLfM5_TlwQ.jpg?r=01f" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 17, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}}  onClick={()=>{ handleImageClick( DocumentoryArr[4].HThree,DocumentoryArr[4].HFive,DocumentoryArr[4].paragraph,DocumentoryArr[4].redBox ,DocumentoryArr[4].bgImage)   }} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABRVOOTuYY0lKaUU40FlJA3xyocRxr3FMp7NYMgwE_hG1oZibbCx4a-6LE6smO_Is_ranJVXePI-ipBPdylCURqU3OQtLm6NsMW943FLu7qrGO_DMcqwGwppjNn7tC_EckbRWLQ.jpg?r=d48" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 25, 2023</span>
                    </div>

            </div>
                <div className="mt-5 text-center">
                    <a  className="november-titles">Show November titles</a>
                </div>

            </div>

        <div className="tab-pane fade" id="Reality" role="tabpanel" aria-labelledby="nav-contact-tab">
             <div className="media-center-tab-content-grid-container">

                     <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick(RealityArr[0].HThree,RealityArr[0].HFive,RealityArr[0].paragraph,RealityArr[0].redBox,RealityArr[0].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABaOy3oVJrYzhLA-uw41hsjSs9NFNtaX36hFQPeVf39qOrt9W7acY8EpbAWORJZfWIzv7HVzDBMdj18Fx_LkTrX1NaVk64Ar-WamL.jpg?r=cb6" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 11, 2023</span>
                    </div>

                    <div className="d-flex flex-column media-center-tab-pane-hover" style={{gap:"8px"}} onClick={()=>{handleImageClick(RealityArr[1].HThree,RealityArr[1].HFive,RealityArr[1].paragraph,RealityArr[1].redBox,RealityArr[1].bgImage)}} data-bs-toggle="modal" data-bs-target="#EstaticBackdrop">
                        <img src="https://dnm.nflximg.net/api/v6/WNk1mr9x_Cd_2itp6pUM7-lXMJg/AAAABZs5naIk5Kyg_pfooXgy3hp1hHGEJxHej_9Y2vIgTXDVfWEimt_yr7SPVWffvkiUAgb-2fLrNmS3bZAPRzIh0jx-ZdiJfIIA6uVXn4jm7Fv7E9W8ya_SdSxYDk4DNM03kWIErg.jpg?r=880" className="img-fluid"/>
                        <span className="text-white" style={{fontSize:"0.85em"}}>October 20, 2023</span>
                    </div>
             </div>
                <div className="mt-5 text-center">
                    <a  className="november-titles">Show November titles</a>
                </div>
        </div>
        
        </div>

        <div className="media-center-section-two-BOX">
            <span className="mediaCenter-navTabs-Span-Text text-white fw-bold">Latest news</span>

            <div className="media-center-latest-news-container">

                    <div className="latest-NEWS-image-box">
                        <div className="news-images news-img-0">
                                <span className="text-white" style={{fontSize:".8em"}}>Italy, Global</span>
                                <h4 className="text-white mt-2 mb-4 fw-bold">Netflix Confirms Its Commitment to the Italian Creative Community and Announces Four New Productions</h4>
                                 <a href="#" className="november-titles">Read more</a>
                            </div>
                    </div> 

                    <div className="latest-NEWS-image-box">
                            <div className="news-images news-img-1">
                                <span className="text-white" style={{fontSize:".8em"}}>Global, Sweden</span>
                                <h4 className="text-white mt-2 mb-4 fw-bold">Netflix Releases Premiere Date and First Look Images for 'A Nearly Normal Family'</h4>
                                 <a href="#" className="november-titles">Read more</a>
                            </div>
                    </div>
                  
                    <div className="latest-NEWS-image-box">
                        <div className="news-images news-img-2">
                                <span className="text-white" style={{fontSize:".8em"}}>South Korea (Republic of Korea), Global</span>
                                <h4 className="text-white mt-2 mb-4 fw-bold">‘Doona!’ Set to Ignite Hearts Worldwide on October 20</h4>
                                 <a  className="november-titles">Read more</a>
                            </div>
                    </div>    

            </div>

                <div className="mt-5 text-center">
                    <a  className="november-titles">Read more news in the Newsroom</a>
                </div>

        </div>


        <div className="media-center-section--3">
            <h3 className=" mt-4 fw-bold text-end" style={{color:"lightgrey"}}>Looking for company assets?</h3>
            <h5 className=" mt-4 text-end" style={{color:"lightgrey"}}>Get more images and information about Netflix on our company site.</h5>
            <div className="text-end" style={{marginTop:"2.3em"}}>
                    <a  className="november-titles">Go to About Netflix</a>
                </div>

        </div>
        </section>
        </>
    )
}
export default MediaCenterSection;
