import { useRef } from "react"
import { useState } from "react"
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'

const FeaturesSlider = () => {
  
  
  return (
    <div className="col">
      <div className="carousel-container">
        <div className="slides">
          <div className="slide">
            <img src={slide1}/>
            <p>Real-Time Communication</p>
          </div>
          <div className="slide">
            <img src={slide2}/>
            <p>Productive Team Collaboration</p></div>
          <div className="slide">
            <img src={slide3}/>
            <p>User Friendly Interface</p>
          </div>
          
        </div>
        
      </div>
      <div className="radio-btn">
        <input type="radio" name='radio' id='feature1' defaultChecked/>
        <label htmlFor="feature1"></label>

        <input type="radio" name='radio' id='feature2'/>
        <label htmlFor="feature2"></label>
      
        <input type="radio" name='radio' id='feature3'/>
        <label htmlFor="feature3"></label>
      
      </div>

    </div>
  );
}
 
export default FeaturesSlider;