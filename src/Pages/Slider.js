import React from 'react';
import slider from '../images/movie.jpg'
import {Button} from "react-bootstrap";

function Slider(props) {
    return (
        <div className="row">
           <div className="mx-auto slider">
               <img src={slider} alt={"Movie Display"}/>
           </div>
            <div className="overlay">
               <div className="">
                   <h1 className="text-white"> Welcome to the Home of Movies</h1>
                   <Button type={"button"} className="btn-outline-success border-white btn-lg   bg-transparent hover:text-black hover:border-green"> Learn More</Button>
               </div>
            </div>
        </div>
    );
}

export default Slider;