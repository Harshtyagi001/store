import React, { useState } from 'react'
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';
import "./slider.scss"

const Slider = () => {

  const [currSlide,setCurrentSlide]=useState(0);

  const data=[
   " https://images.pexels.com/photos/11286136/pexels-photo-11286136.jpeg?auto=compress&cs=tinysrgb&w=600"
    ,"https://images.pexels.com/photos/5661240/pexels-photo-5661240.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/3737676/pexels-photo-3737676.jpeg?auto=compress&cs=tinysrgb&w=600"

  ]

const prevSlide=()=>{
 setCurrentSlide(currSlide===0?2:(prev)=>prev-1)
}

const nextSlide=()=>{
 setCurrentSlide(currSlide===2?0:(prev)=>prev+1)
}

  return (
    <div className='slider'>
      <div className='container' style={{transform:`translateX(-${currSlide*100}vw)`}}> 
      <div className='imag-div'>
       <img src={data[0]}/>
       </div>
       <div className='imag-div'>
       <img src={data[1]}/>
       </div>
       <div className='imag-div'>
       <img src={data[2]}/>
       </div>
      </div>

      <div className='icons'>
       <div className='icon' onClick={prevSlide}>
        <ArrowBackOutlinedIcon/>
       </div>
       <div className='icon' onClick={nextSlide}>
        <ArrowForwardOutlinedIcon/>
       </div>
      </div>
    </div>
  )
}

export default Slider;