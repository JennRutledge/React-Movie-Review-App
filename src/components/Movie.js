// component that represents movie data inside of the movie list
// used OMDb API with Postman, couldn't get the first activation key to work.
// once the activation key worked was able to search for movies using the s for the key
// then in the value putting the movie name, went with kid/family friendly movies


import React, { useState }  from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import MovieList from './MovieList'
// need to import components to use in other areas as well as any css, bootstrap and react

let Movie = () => {
    // setting state, what it is before and what it is after
    // for this app we are not changing the state by adding more movies
    // so the state will stay the same, but could in the future add and change
  let [movies, setMovies] = useState([            
    {
        "Title": "Jumanji: Welcome to the Jungle",
        "Year": "2017",
        "imdbID": "tt2283362",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        "Title": "Jumanji",
        "Year": "1995",
        "imdbID": "tt0113497",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BZTk2ZmUwYmEtNTcwZS00YmMyLWFkYjMtNTRmZDA3YWExMjc2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    },
    {
        "Title": "Jumanji: The Next Level",
        "Year": "2019",
        "imdbID": "tt7975244",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTVjMmFiMDUtOWQ4My00YzhmLWE3MzEtODM1NDFjMWEwZTRkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg"
    },
    {
        "Title": "Jumanji: Level One",
        "Year": "2021",
        "imdbID": "tt13249100",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMWI0ZTM3ZmEtNmY2OS00NGFhLWFjYmYtMmNkMjMxNzBiZGIwXkEyXkFqcGdeQXVyMjI1MTU4OTM@._V1_SX300.jpg"
    },
    {
        "Title": "The Land Before Time",
        "Year": "1988",
        "imdbID": "tt0095489",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BNDVhZjVmZWYtYTE0OC00MGFjLWI1YWQtZmJhNmE5NzI4ZWE4XkEyXkFqcGdeQXVyMzczMzE2ODM@._V1_SX300.jpg"
    },
    {
        "Title": "The Land Before Time II: The Great Valley Adventure",        
        "Year": "1994",        
        "imdbID": "tt0110300",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTY2ODkwMjIyMF5BMl5BanBnXkFtZTYwMjM2MDg5._V1_SX300.jpg"
    },        
    {
        "Title": "The Land Before Time III: The Time of the Great Giving",
        "Year": "1995",
        "imdbID": "tt0113596",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BMTI1OTU3NjkwMl5BMl5BanBnXkFtZTYwOTU2MDg5._V1_SX300.jpg"
    },
    {
        "Title": "Dog",
        "Year": "2022",
        "imdbID": "tt11252248",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BYjA2MDM2YjctYzNhNC00NGEzLWFmYWEtODExODFkNmUyOGE2XkEyXkFqcGdeQXVyODk2NDQ3MTA@._V1_SX300.jpg"
    },
    {
        "Title": "The Super Mario Bros. Movie",
        "Year": "2023",
        "imdbID": "tt6718170",
        "Type": "movie",
        "Poster": "https://m.media-amazon.com/images/M/MV5BOTJhNzlmNzctNTU5Yy00N2YwLThhMjQtZDM0YjEzN2Y0ZjNhXkEyXkFqcGdeQXVyMTEwMTQ4MzU5._V1_SX300.jpg"
    },

]);
  return(
    <div className='container-fluid movie-app '>
        <div className='row'>
            <MovieList movies = {movies} />    
        </div>
       
    </div>
  ); 
};
// need to export components to use in other areas
export default Movie;
