//container inside of movie that holds review components: stars and review form and review

import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ReviewForm from './ReviewForm';
import Stars from './Stars';
import Review from './Review';

// need to import components to use in other areas as well as any css, bootstrap and react
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
// need to export this component so it can be used in other components
export default ReviewList;