import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './index.css';
import './App.css';
import Stars from './components/Stars';
//import Review from './components/Review';
//import ReviewForm from './components/ReviewForm'
//import MovieList from './components/MovieList';
import Movie from './components/Movie';
//import App from './App';
//import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <body>
   
   <Movie />
   <Stars />
    
   
   

  </body>
  // <React.StrictMode>
  
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
