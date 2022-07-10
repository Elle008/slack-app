import { act } from "@testing-library/react"
import { useEffect, useRef, useState } from "react"
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'

const FeaturesSlider = () => {
  const [activePage, setActivePage] = useState(0)
  const slidesRef = useRef()
  const paginationRef = useRef()
  
  const scrollToPage = (pageNum) => {
    setActivePage(pageNum)
    slidesRef.current.children[pageNum].scrollIntoView(true)
  }

  return (
    <div className="col">
      <div className="carousel-container">
        <div className="slides" ref={slidesRef}>
          <div className="slide page1">
            <img src={slide1}/>
            <p>Real-Time Communication</p>
          </div>
          <div className="slide page2" >
            <img src={slide2}/>
            <p>Productive Team Collaboration</p></div>
          <div className="slide page3">
            <img src={slide3}/>
            <p>User Friendly Interface</p>
          </div>
          
        </div>
        
      </div>
      <div className="pagination" ref={paginationRef}>
        <button className="page" onFocus={ () => {scrollToPage(0)}} autoFocus></button>
        <button className="page" onFocus={ () => {scrollToPage(1)}}></button>
        <button className="page" onFocus={ () => {scrollToPage(2)}}></button>
      
      </div>

    </div>
  );
}
 
export default FeaturesSlider;