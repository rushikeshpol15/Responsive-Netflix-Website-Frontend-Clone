import { useState } from "react";
import "./WayToWatch.css";


function WayToWatchSection()
{
    let[borderIndex,setBorderIndex]=useState(1);

    return(
        <>
        <section className="way-to-watch-section">
        <ul className="nav nav-tabs way-to-watch-platform-list-horizontal" id="myTab" role="tablist">
            <li className={(borderIndex==1)?"nav-item way-to-watch-platform-nested-list remove-border":"nav-item way-to-watch-platform-nested-list "}  role="presentation">
                <button className="nav-link way-to-watch-section-platform-button active" id="home-tab" onClick={()=>{setBorderIndex(1)}} data-bs-toggle="tab" data-bs-target="#platform-1" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                    <img src={(borderIndex==1)?"https://devices.netflix.com/images/icons/media-player-active.png":"https://devices.netflix.com/images/icons/media-player.png"} alt="img" className="platform-img"/>
                    Streaming Media Players
                </button>
            </li>
            <li className={(borderIndex==2)?"nav-item way-to-watch-platform-nested-list remove-border" :"nav-item way-to-watch-platform-nested-list" }role="presentation">
                <button className="nav-link way-to-watch-section-platform-button" id="profile-tab" onClick={()=>{setBorderIndex(2)}} data-bs-toggle="tab" data-bs-target="#platform-2" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                     <img src={(borderIndex==2)?"https://devices.netflix.com/images/icons/hdtv-active.png":"https://devices.netflix.com/images/icons/hdtv.png"} alt="img" className="platform-img"/>
                    Smart TVs
                    </button>
            </li>
            <li className={(borderIndex==3)?"nav-item way-to-watch-platform-nested-list remove-border" :"nav-item way-to-watch-platform-nested-list" } role="presentation">
                <button className="nav-link way-to-watch-section-platform-button" id="contact-tab" onClick={()=>{setBorderIndex(3)}}  data-bs-toggle="tab" data-bs-target="#platform-3" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                     <img src={(borderIndex==3)?"https://devices.netflix.com/images/icons/game-console-active.png":"https://devices.netflix.com/images/icons/game-console.png" }alt="img" className="platform-img"/>
                     Game Consoles
                    </button>
            </li>
            <li className={(borderIndex==4)?"nav-item way-to-watch-platform-nested-list remove-border" :"nav-item way-to-watch-platform-nested-list" } role="presentation">
                <button className="nav-link way-to-watch-section-platform-button" id="disabled-tab" onClick={()=>{setBorderIndex(4)}} data-bs-toggle="tab" data-bs-target="#platform-4" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >
                     <img src={(borderIndex==4)?"https://devices.netflix.com/images/icons/mvpd-active.png":"https://devices.netflix.com/images/icons/mvpd.png"} alt="img" className="platform-img"/>
                     Set-top Boxes
                    </button>
            </li>
            <li className={(borderIndex==5)?"nav-item way-to-watch-platform-nested-list remove-border" :"nav-item way-to-watch-platform-nested-list" } role="presentation">
                <button className="nav-link way-to-watch-section-platform-button" id="disabled-tab" onClick={()=>{setBorderIndex(5)}} data-bs-toggle="tab" data-bs-target="#platform-5" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >
                     <img src={(borderIndex==5)?"https://devices.netflix.com/images/icons/blu-ray-player-active.png":"https://devices.netflix.com/images/icons/blu-ray-player.png"} alt="img" className="platform-img"/>
                     Blu-ray Players
                    </button>
            </li>
            <li className={(borderIndex==6)?"nav-item way-to-watch-platform-nested-list remove-border" :"nav-item way-to-watch-platform-nested-list" } role="presentation">
                <button className="nav-link way-to-watch-section-platform-button" id="disabled-tab" onClick={()=>{setBorderIndex(6)}} data-bs-toggle="tab" data-bs-target="#platform-6" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >
                     <img src={(borderIndex==6)?"https://devices.netflix.com/images/icons/phones-and-tablet-active.png":"https://devices.netflix.com/images/icons/phones-and-tablet.png"} alt="img" className="platform-img"/>
                     Smartphones & Tablets
                    </button>
            </li>
            <li className={(borderIndex==7)?"nav-item way-to-watch-platform-nested-list remove-border" :"nav-item way-to-watch-platform-nested-list" } role="presentation">
                <button className="nav-link way-to-watch-section-platform-button" id="disabled-tab" onClick={()=>{setBorderIndex(7)}} data-bs-toggle="tab" data-bs-target="#platform-7" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" >
                     <img src={(borderIndex==7)?"https://devices.netflix.com/images/icons/laptop-active.png":"https://devices.netflix.com/images/icons/laptop.png"} alt="img" className="platform-img"/>
                     PCs & Laptops
                    </button>
            </li>
           
        </ul>
        <div className="tab-content way-to-watch-tab-content-background" id="myTabContent">

            <div className="tab-pane fade show active" id="platform-1" role="tabpanel" aria-labelledby="home-tab" tabIndex="0">
            <div className="tab-content-inner-container">
                        <div className="tab-content-platform-one-heading">
                        <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>PLUG AND PLAY</h2>
                        <p className="mt-4 text-white" style={{fontSize:"0.9em"}}>The newest generation of media players and streaming sticks offer a fast, easy, and affordable way to watch Netflix on your TV.</p>
                        </div>
                        <div className="tab-content-platform-one-container">
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/media_players/appletv_rev.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/uploads/g-chromecast.png" alt="img" className="img-fluid" width={"47%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/uploads/portal-from-facebook.png" alt="img" className="img-fluid" width={"45%"}/>
                            
                            </a>

                        </div>
                    </div>
                </div>

            <div className="tab-pane fade" id="platform-2" role="tabpanel" aria-labelledby="profile-tab" tabIndex="0">
                <div className="tab-content-inner-container">
                     <div className="tab-content-platform-one-heading">
                        <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>BUILT-IN CONNECTION</h2>
                        <p className="mt-4 text-white" style={{fontSize:"0.9em"}}>Smart TVs have Netflix already on them—ready for you to watch. There’s no need to add another device.</p>
                    
                        <div className="my-5 ">
                            <img src="https://devices.netflix.com/images/nrtv-ja.png" className="platform-smart-tv-img img-fluid"/>
                            <p className="mt-4 text-white" style={{fontSize:"0.9em"}}>Want a smart TV that’s built for a great Netflix experience? Look for smart TVs with the Netflix Recommended TV logo.</p>
                            <a  className="py-2 px-4  platfrom-a-img-hover text-decoration-none fw-bold" style={{fontSize:"0.7em",border:"2px solid red",color:"red" ,borderRadius:"3px"}}>LEARN MORE ▸</a>
                        </div>
                    </div>

                    <div className="tab-content-platform-one-container">
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/hdtvs/hisenselogo.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/hdtvs/lg-logo-3d-tagline-white.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/images/hdtvs/panasonic_logo_bl_posi_png.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/images/hdtvs/philips_transparent_logo.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/images/hdtvs/samsung_lettermark_white_rgb.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/images/hdtvs/sharp-light.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src=" https://devices.netflix.com/images/hdtvs/sony-light.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"70px",backgroundColor:"black"}}>
                                <img src=" https://devices.netflix.com/images/hdtvs/toshiba.png" alt="img" className="img-fluid" width={"50%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{minHeight:"90px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/uploads/1024px-xiaomi-logo-svg.png" alt="img" className="img-fluid" width={"37%"}/>
                            </a>

                        </div>
                </div>
                </div>

            <div className="tab-pane fade" id="platform-3" role="tabpanel" aria-labelledby="contact-tab" tabIndex="0">
                <div className="tab-content-inner-container">
                       <div className="tab-content-platform-one-heading">
                               <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>PLAY GAMES <br/> PLAY MOVIES</h2>
                               <p className="mt-4 text-white" style={{fontSize:"0.9em"}}>You can also watch Netflix on a variety of game consoles.</p>            
                       </div>
                       <div className="tab-content-platform-one-container">
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"120px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/game-consoles/ps3.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"120px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/game-consoles/ps4.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"120px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/uploads/ps5-logo.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"120px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/game-consoles/xbox360_2013_stacked_wht_rgb.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                             <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"120px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/game-consoles/xboxone_stacked_wht_rgb.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                             <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"120px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/uploads/xboxseriesxs-2020-stack-wht-rgb-1-copy-xboxallaccess-2020-stacked-dkgray-rgb.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>

                        </div>
                       
                </div>

            </div>

            <div className="tab-pane fade" id="platform-4" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                <div className="tab-content-inner-container">
                    <div className="tab-content-platform-one-heading">
                                <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>EASY AS CHANGING <br/> CHANNELS</h2>
                                <p className="mt-4 text-white" style={{fontSize:"0.9em",paddingBottom:"10em"}}>Now you can switch from live TV to Netflix right from your set-top box. Netflix is available through a growing number of pay TV providers. Ask yours for Netflix if you don’t see it here.</p>            
                        </div>
                    </div>
                </div>

            <div className="tab-pane fade" id="platform-5" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                <div className="tab-content-inner-container">
                    <div className="tab-content-platform-one-heading">
                                    <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>ENJOY THE SIGHTS & <br/> SOUNDS</h2>
                                    <p className="mt-4 text-white" style={{fontSize:"0.9em"}}>Stream Netflix using your Blu-ray player or Home Theater System.</p>            
                    </div>
                    <div className="tab-content-platform-one-container">
                            
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/hdtvs/lg-logo-3d-tagline-white.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/images/hdtvs/panasonic_logo_bl_posi_png.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                          
                            <a className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="	https://devices.netflix.com/images/hdtvs/samsung_lettermark_white_rgb.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                          
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src=" https://devices.netflix.com/images/hdtvs/sony-light.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                          

                        </div>
              
                </div>
                </div>

            <div className="tab-pane fade" id="platform-6" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                <div className="tab-content-inner-container">
                <div className="tab-content-platform-one-heading">
                        <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>TAKE NETFLIX WITH YOU</h2>
                        <p className="mt-4 text-white" style={{fontSize:"0.9em"}}>It’s easy to watch Netflix from anywhere. If Netflix isn’t already on your phone or tablet, you can download our free app from the Apple App Store, Google Play, or the Windows Phone Store.</p>
                        </div>
                        <div className="tab-content-platform-one-container">
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src=" https://devices.netflix.com/images/phones-and-tablets/android.png" alt="img" className="img-fluid" width={"45%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/phones-and-tablets/apple_logo_360.png" alt="img" className="img-fluid" width={"47%"}/>
                            </a>
                            <a  className="d-inline-flex justify-content-center align-items-center platfrom-a-img-hover" style={{height:"200px",backgroundColor:"black"}}>
                                <img src="https://devices.netflix.com/images/phones-and-tablets/windows-phone.png" alt="img" className="img-fluid" width={"45%"}/>
                            
                            </a>

                        </div>
                </div>
                </div>

            <div className="tab-pane fade" id="platform-7" role="tabpanel" aria-labelledby="disabled-tab" tabIndex="0">
                <div className="tab-content-inner-container">
                    <div className="tab-content-platform-one-heading">
                                <h2 className="text-white ps-4 mt-5" style={{borderLeft:"2px solid red"}}>WATCH ON WHAT YOU HAVE</h2>
                                <p className="mt-4 text-white" style={{fontSize:"0.9em",paddingBottom:"11em"}}>Netflix is optimized for today’s most popular browsers so you can watch on your PC or laptop.</p>            
                    </div>
                </div>

                </div>

        </div>
        </section>
        </>
    )
}

export default WayToWatchSection;
