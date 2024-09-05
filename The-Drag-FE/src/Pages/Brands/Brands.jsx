import React, { useContext } from 'react'
import bundeli from '../../assets/bundeli.png'

import './Brands.css'
import DragContext from '../../Context/Dragcontext'
const Brands = () => {
    const {brands}=useContext(DragContext);
  return (
    <div className='Brands-Container'>
          <div className="Brand-Carousel">
            <img src={bundeli} alt=""  />
            <button type="button" className='join-btn'> JOIN NOW</button>
          </div>
          <div className="brands-list">
            <h3>Our Brands</h3>
            <div className='brands-list-items'>
                {
                    brands.map((item)=>{
               return <img src={item.image} alt={item.name}/>
                    })
                }
            </div>

          </div>


      
    </div>
  )
}

export default Brands
