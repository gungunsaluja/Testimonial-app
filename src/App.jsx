import React from 'react';
import reviews from './data';
import Testimonial from './Components/Testimonial';

function App() {


  return (
    <div className = "flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-violet-800">
      <div className = "text-center">
        <h1 className = "text-4xl font-bold text-decoration-line: underline">Our Testimonials</h1>
        <div className = "bg-violet-400 h-[4px] w-1/5 mt-1"></div>
        <Testimonial reviews = {reviews}/>
      </div>
      
    </div>
  );
};

export default App
