import HorizontalSeriesBar from "./HorizontalSeriesBar";
import "./OnlyOnNetflix.css";
import NewReleaseArr from "./NewReleaseArr";
import PopularOnNetflix from "./PopularOnNetflix";
import HindiMoviesAndTv from "./HindiMoviesAndTv";
import ActionMovies from "./ActionMovies";
import Documentaries from "./Documentories";
import ComedyMovies from "./ComdeyMovies";
import CrimeTvShows from "./CrimeTVShows";

function OnlyOnNetflixSection()
{
    return(
        <>
        <section className="only-on-netflix-section">
            <h1 className="only-one-netflix-h1 text-white mb-3">Only on Netflix</h1>
            <h5 className="only-one-netflix-h5 text-white pb-4">Netflix is the home of amazing original programming that you can’t find anywhere else. Movies, TV shows, specials and more, all tailored specifically to you.</h5>
            <HorizontalSeriesBar Catagory={'New Releases'} seriesArr={NewReleaseArr} />
            <HorizontalSeriesBar Catagory={'Popular on Netflix'} seriesArr={PopularOnNetflix}/>
            <HorizontalSeriesBar Catagory={'Hindi Movies & TV'} seriesArr={HindiMoviesAndTv}/>
            <HorizontalSeriesBar Catagory={"Action Movies"} seriesArr={ActionMovies}/>
            <HorizontalSeriesBar Catagory={"Documentaries"} seriesArr={Documentaries}/>
            <HorizontalSeriesBar Catagory={"Comedy Movies"} seriesArr={ComedyMovies}/>
            <HorizontalSeriesBar Catagory={"Crime TV Shows"} seriesArr={CrimeTvShows}/>

            <div className="only-on-netflix-section-bottom-container" >

              <div >
                <HorizontalSeriesBar Catagory={'Popular on Netflix'} seriesArr={PopularOnNetflix}/>
                <HorizontalSeriesBar Catagory={'Hindi Movies & TV'} seriesArr={HindiMoviesAndTv}/>
              </div>
                
            </div>

            <div className="only-on-netflix-section-bottom-absolute-container">
                <h1 className="text-white text-center only-on-section-bottom-h1 mb-4 fw-bold">There’s even more to watch.</h1>
                <h4 className="text-white text-center only-on-section-bottom-h4 ">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals and more. Watch as much as you want, anytime you want.</h4>
                <div className="only-section-bottom-join-now-container text-center mt-5">
                    <a href="/JoinNowMain" className="Only-on-JoinNow-box text-white text-decoration-none only-on-section-bottom-joinNow" style={{fontSize:"1.3em"}}>JOIN NOW</a>
                </div>

              </div>
            

        </section>
        </>
    )
}




export default OnlyOnNetflixSection;