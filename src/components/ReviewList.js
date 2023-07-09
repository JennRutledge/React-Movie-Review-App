//container inside of movie that holds review components: stars and review form and review

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ReviewForm from './ReviewForm';
import Stars from './Stars';
import Review from './Review';


let ReviewList = () => {
   
    return (
        <div className='totalReview'>
        <div className='stars'>
            <Stars  />
        </div>
        <div className='reviewForm'>
            <Review />
            <ReviewForm />
        </div>
        </div>
    )
}

export default ReviewList;