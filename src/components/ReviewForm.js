// This is the form that will be filled out to create the review

import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

// need to import components to use in other areas as well as any css, bootstrap and react
// state is an empty string to start then the review is added changing state
let ReviewForm = () => { 
    let [review, setReview] = useState('');
// the handleSubmit gives an alert stating the form was submitted, showing user sucess
    let handleSubmit = (e) => {
        e.preventDefault();
        alert('You have submitted.');
    }
// This is the actual form created with HTML elements and using bootstrap design
        return (
            <div className='form'>
                <label for='reviewInput' className='form-label'>Your Review</label>
                <input type='text' 
                className='form-control' 
                id='reviewInput' 
                placeholder='Enter your movie review.'
                value={review}
                onChange={(e) => setReview(e.target.value)}></input>
                <button className='btn btn-primary' 
                type='submit' 
                value='Submit' 
                onClick={handleSubmit}>Add Review</button>
            </div>
        );
    };
// need to export components to use in other areas
export default ReviewForm;