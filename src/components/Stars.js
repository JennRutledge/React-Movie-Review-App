// component of the review list

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

let Stars = () => {
    let [rating, setRating] = useState(0);
    let [hover, setHover] = useState(0);
    return (
        <div className='star-rating'>
            {[...Array(5)].map((stars, index) => {
                index += 1;
                return (
                    <button
                        type='button'
                        key={index}
                        className={index <= (hover || rating) ? 'off' : 'on'}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                        >
                        <span className='star'>&#9733;</span>
                    </button>
                );
            })}
        </div>
    );
};

export default Stars;