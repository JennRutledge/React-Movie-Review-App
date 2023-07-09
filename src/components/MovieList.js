// a container for all of the movie components and their data

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ReviewList from './ReviewList';
import '../App.css';

// need to import components to use in other areas as well as any css, bootstrap and react
// This is the component used to display the movies
// done my maping over the array of movies
// added the ReviewList so that the review components are attached to each
// individual movie

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
// need to export components to use in other areas
export default MovieList;