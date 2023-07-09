// This is the form that will be filled out to create the review

import React, { useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';



let ReviewForm = () => { 
    let [review, setReview] = useState('');

    let handleSubmit = (e) => {
        e.preventDefault();
        alert('You have submitted.');
    }
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

export default ReviewForm;