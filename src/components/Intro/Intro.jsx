import React from 'react'
import './intro.css'
import Navbar from "./Navbar";

export default function Intro() {

  
  return (
    <div className='intro relative'>
      <div className="container mx-auto px-8 pt-12 ">
        {/* header + content  */}   
        <Navbar />
        <div className="content flex flex-col gap-6 text-center  text-white  w-11/12 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
          <h1 className='text-4xl lg:text-6xl font-bold'>A modern publishing platform</h1>
          <p className='text-xl lg:text-2xl'>Grow your audience and build your online brand</p>
        <div className="cta flex gap-4 items-center justify-center mt-4">
          <button className="btn btn-1">Start for Free</button>
          <button className="btn btn-2">Learn More</button>
        </div>
        </div>
      </div>
    </div>
  )
}
