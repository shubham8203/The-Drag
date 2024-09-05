import React, { useContext } from "react";
import './Communities.css'
import Card from "../card/Card";
import DragContext from "../../Context/Dragcontext";

const Communities=()=>{
    const {communities}=useContext(DragContext);
    return (
       <div className="feature-main">
         <div className="feature-container">
            <div className="upperpart">
            <p>Communities</p>
            <button style={{cursor:'pointer'}}>
                View All
            </button>
            </div>
            <div className="lowerpart">
              {
                  communities.map((item,idx,arr)=>{
                       return (idx<=3)?<Card item={item}/>:null
                  })
              }
            </div>
           
         </div>
       </div>
        
    )
}
export default Communities;