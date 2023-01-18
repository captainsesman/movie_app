import React from 'react';
import oldWay from '../images/theoldway.jpg'

function MovieCard(props) {
    return (
   <div>
       <div className="card border-4 border-r border-success " style={{width:"344px"}} >
           <img className="card-img-top" src={oldWay} alt="Card image cap"  height={344} />
           <div className="card-body">
               <h5 className="card-title">Title</h5>
               <p className="card-text">2022</p>
           </div>
       </div>

   </div>
    );
}

export default MovieCard;