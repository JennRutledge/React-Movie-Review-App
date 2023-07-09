// a container for all of the movie components and their data

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
//import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';
import '../App.css';

let MovieList = (props) => {
    return (
        <div className='d-flex justify-content-start m-3'> 
            {props.movies.map((movie, index) =>
           
            <div className='flex justify-content-start m-3'>
                <img src={movie.Poster} alt='movie'></img>
            
            <div><ReviewList /></div> 
            </div>
            
            
             )}  
              
        </div>    
     );
};

export default MovieList;