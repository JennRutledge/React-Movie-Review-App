// Text review left by users

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import ReviewForm from './ReviewForm';

// need to import components to use in other areas as well as any css, bootstrap and react
// this is where the review form data should be stored
// state will update each time a review is added

let Review = () => {
    let [review, setReview] = useState([])
    ReviewForm

}
// need to export components to use in other areas
export default Review;