// component of the review list

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';

// need to import components to use in other areas as well as any css, bootstrap and react
let Stars = () => {
    // set two states one for the current rating and one for when the star is hovered over
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
                        // by changing the position of the off : on to on : off it wil change
                        // if the stars start filled or are unfilled
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
// the &#9733 is the code for the star icon
// need to export this component so it can be used in other areas
export default Stars;