import React, { useContext } from 'react'
import carouselPic from '../../assets/CarouselPic.png'
import DragContext from '../../Context/Dragcontext'
import './CreatorPage.css'

const CreatorPage = () => {
    const {creators}=useContext(DragContext);
  return (
    <div className='creator-container'>
      <div className='creator-carousel'>
           <img src={carouselPic} alt="" />
      </div>
      <div className="creator-list">
        <h3>Our Creators</h3>
        <div className="creator-list-items">
            {
                creators.map((item)=>{
                       return (
                        <div className='items'>
                          <img src={item.image} alt="" style={{width:'160px',height:'160px',borderRadius:'100%'}}  />
                          <p>{item.name}</p>
                        </div>
                       
                       )
                       
                })
            }
        </div>
      </div>
    </div>
  )
}

export default CreatorPage
