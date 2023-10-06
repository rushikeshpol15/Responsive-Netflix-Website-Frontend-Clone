import "./homepage.css";
import frame1 from "./frame 1.png";
import frame2 from "./frame 2.png";
import frame3 from "./frame 3.png";
import frame4 from "./frame 4.png";


function Section()
{
    return(
        <>
        <section className="section">
            <div className="section-container">

                <div className="container py-5">

                    <div className="row  my-3 gx-2">

                        <div className="col-sm-7 text-white  d-inline-flex align-items-center">

                            <div>
                            <h1>Enjoy on your TV</h1>
                            <h2>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h2>
                            </div>
            
                        </div>
                        <div className="col-sm-5  ">
                            <img src={frame1} className="img-fluid"/>
                        </div>

                    </div>
                         <hr className="hr rounded"/>

                    <div className="row  my-3 gx-2 reverse">

                          <div className="col-sm-6  ">
                            <img src={frame2} className="img-fluid"/>
                        </div>
                        <div className="col-sm-6 text-white  d-inline-flex align-items-center">

                            <div>
                            <h1>Watch everywhere</h1>
                            <h2>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                            </div>
            
                        </div>
                       

                    </div>
                        <hr className="hr rounded"/>
                    
                    <div className="row  my-3 gx-2">

                        <div className="col-sm-7 text-white  d-inline-flex align-items-center">

                            <div>
                            <h1>Create profiles for kids</h1>
                            <h2>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h2>
                            </div>
            
                        </div>
                        <div className="col-sm-5  ">
                            <img src={frame3} className="img-fluid"/>
                        </div>

                    </div>
                         <hr className="hr rounded"/>

                    <div className="row  my-3 gx-2 reverse">

                        <div className="col-sm-6  ">
                            <img src={frame4} className="img-fluid"/>
                        </div>
                        <div className="col-sm-6 text-white  d-inline-flex align-items-center ">

                            <div>
                            <h1>Download your shows to watch offline</h1>
                            <h2>Save your favourites easily and always have something to watch.</h2>
                            </div>
            
                        </div>
                       

                    </div>
                    <hr className="hr rounded "/>

                </div>

            </div>
        </section>
        </>
    )
}

export default Section;