import React from "react";
import './Brands.css'

 const Brands=({name,category})=>{
  
    return (
        <div className="feature-main">
         <div className="feature-container" style={name==='Brands'?{}:{height:'max-content'}}>
            <div className="upperpart">
            <p style={{fontWeight:'700'}}>{name}</p>
            <button style={{cursor:'pointer'}}>
                View All
            </button>
            </div>
            { 
           
            <div className="lowerpart" style={name==='Brands'?{}:{flexWrap:'wrap',gap:'100px',paddingBottom:'100px'}}>
             {
                
            name==='Brands'?
            category.map((item)=>{
                 return <img src={item.image} alt="" />
 }):
 category.map((item)=>{
    return (
    <div style={{color:'white',display:'flex',flexDirection:'column',alignItems:'center'}}> 
        <img src={item.image} alt="" style={{borderRadius:'100%',width:'160px',height:'160px'}}/>
        <p style={{fontWeight:'700'}}>{item.name}</p>
    </div>
)
      
        
})
                
             }
                
            </div>
            }
 
           
         </div>
        </div>
    )
 }
 export default Brands;