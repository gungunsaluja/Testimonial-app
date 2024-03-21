import React from 'react';
import Card from './Card';

import {FiChevronLeft , FiChevronRight} from 'react-icons/fi';
import {useState} from 'react';
 const Testimonial = (props) =>{
    let reviews = props.reviews;
    const [index,setIndex] = useState(0);

    function leftShiftHandler()
    {
        if(index-1<0){
            setIndex(reviews.lenght-1);
        }

        else{
            setIndex(index-1);

            }


    }
    function rightShiftHandler()
    {
        if(index+1>=reviews.length){
            setIndex(0);
        }
        else{
            setIndex(index+1);
        }

    }
    function surpriseHandler()
    {
    let randomIndex= Math.floor(Math.random()*reviews.length);
        setIndex(randomIndex);

    }
    return(
        <div className='w-[85vw] md:w-[700px] bg-black flex flex-col justify-center mt-10 p-10 transition-all duration-700  rounded-3xl  '>
            <Card review = {reviews[index]}/>
            
        <div className='flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto'>
            <button onClick = {leftShiftHandler}
            className = "cursor-pointer hover:text-violet-800">
                <FiChevronLeft/>
                
            </button>
            <button onClick = {rightShiftHandler} className = "cursor-pointer hover:text-violet-800">
                <FiChevronRight/>
            </button>
            </div>
            <div className = "mt-6">
            <button  onClick = {surpriseHandler} className = 'bg-violet-600 hover:bg-violet-800 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg'>Surprise me!!</button>
        </div>


        </div>
        )
 }
 export default Testimonial;