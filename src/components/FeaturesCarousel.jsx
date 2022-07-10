import { useEffect, useRef } from "react"
import { useState } from "react"
import slide1 from '../assets/slide1.png'
import slide2 from '../assets/slide2.png'
import slide3 from '../assets/slide3.png'

const FeaturesSlider = () => {
  const [activePage, setActivePage] = useState(0)
  const slidesRef = useRef()
  const paginationRef = useRef()
  const btnRef1 = useRef()
  const btnRef2 = useRef()
  const btnRef3 = useRef()
  
  const scrollToPage = (pageNum) => {
    setActivePage(pageNum)
    slidesRef.current.children[pageNum].scrollIntoView(true)
    
  }

  useEffect(() => {
    if (activePage === 2) {
      setActivePage(-1)

    }
    setInterval(() => {
      scrollToPage(activePage + 1)
    }, 3000)
  })

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
        <button className="page" ref={btnRef1} onClick={ () => {scrollToPage(0)}} autoFocus></button>
        <button className="page" ref={btnRef2} onClick={ () => {scrollToPage(1)}}></button>
        <button className="page" ref={btnRef3} onClick={ () => {scrollToPage(2)}}></button>
      
      </div>

    </div>
  );
}
 
export default FeaturesSlider;