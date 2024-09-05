import React from "react";
import './Hero-carousel.css'
import prev from '../../assets/previous.png'
import next from '../../assets/next.png'
import image1 from '../../assets/image1.jpeg'
import image2 from '../../assets/image2.jpeg'
import image3 from '../../assets/image3.jpeg'

const Hero_carousel=()=>{
  
    const left=()=>{
     const carousel=document.getElementsByClassName('carousel');
      carousel[0].scrollLeft-=(1000);

    }
    const right=()=>{
        const carousel=document.getElementsByClassName('carousel');
        console.log(carousel[0].scrollLeft);
        carousel[0].scrollLeft+=(1000);
    }

return (
    <div className="container">
   <div className="carousel-main">
        <div className="prev">
            <img src={prev} alt="" onClick={left} />
        </div>
        <div className="carousel">
        <div className="carousel-item">
            <img src={image1} alt="" />
        </div>
        <div className="carousel-item">
            <img src={image2} alt="" />
        </div>
        <div className="carousel-item">
            <img src={image3} alt="" />
        </div>
        </div>
        
        <div className="next">
            <img src={next} alt="" onClick={right} />
        </div>
    </div>
    </div>  
)
}
export default Hero_carousel