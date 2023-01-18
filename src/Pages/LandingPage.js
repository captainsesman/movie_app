import Menu from "../Menu";
import Slider from "./Slider";
import MovieCard from "./MovieCard";

const LandingPage = () => {
    return (
        <div>
            <Menu/>
            {/*Slider*/}
            <Slider/>
        {/*Movie Cards*/}
           <div className="row d-flex flex-column justify-content-center flex-row ">
               <div className=" grid d-flex flex-row flex-wrap mx-5 col-12 mb-3">
                   <div className="col-4 mb-4 mt-4">
                       <MovieCard />
                   </div>
                   <div className="col-4 mb-4 mt-4">
                       <MovieCard />
                   </div>

                   <div className="col-4 mb-4 mt-4">
                       <MovieCard />
                   </div>


                   <div className="col-4">
                       <MovieCard />
                   </div>
                   <div className="col-4 mb-4">
                       <MovieCard />
                   </div>
                   <div className="col-4 mb-4">
                       <MovieCard />
                   </div>
                   <div className="col-4 mb-4">
                       <MovieCard />
                   </div>
               </div>
           </div>


        </div>
    );
};

export {LandingPage};
