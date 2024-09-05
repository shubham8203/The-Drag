import React from "react";
import './Card.css'

const Card=({item})=>{

    return (
        <div className="card" style={{background:`url(${item.image})`,backgroundSize:'cover'}}>
            <div className="gradient">
            <h3>
{item.name}
                </h3> 
                <p>
                   Join <br />
                    now at <br />
                    $ 499/-
                    </p>   
            </div>
             
        </div>
    )
}
export default Card;