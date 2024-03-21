import React from 'react';

import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';
const Card = (props) =>{
    let review = props.review;

    return(
        <div className ="flex flex-col md:relative ">
            <div className = "absolute top-[-7rem] z-[10] mx-auto ">
                <img className = "aspect-square rounded-full w-[140px] h-[140px] z-[25]" src = {review.image}/>
<div className = "w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-6px] z-[-20] left-[10px]"></div>
            </div>
        <div className = "text-center mt-7">
            <p className = 'tracking-wider font-bold text-2xl capitalize text-white underline decoration-solid'>{review.name}</p>
            <p className='text-violet-800 uppercase text-sm'>{review.job}</p>

        </div>

        <div className = 'text-center bg-white mt-7'>
            
        </div>
        <div className='text-violet-800 mx-auto mt-5 '>
            <FaQuoteLeft/>
        </div>
        <div className = 'text-center mt-4 text-white underline "'>
            {review.text}
        </div>
        <div className='text-violet-800 mx-auto mt-5'>
            <FaQuoteRight/>
        </div>
        
        </div>
        )

}
export default Card;
