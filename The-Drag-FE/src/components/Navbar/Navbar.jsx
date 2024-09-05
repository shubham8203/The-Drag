import React, { useEffect, useState } from "react";
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import profile_icon from '../../assets/profile_icon.svg'
import cart_icon from '../../assets/cart_icon.svg'
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import Register from "../Register/Register";
import Login from "../login/Login";
import Update from "../Update/Update";
import dotnenv from 'dotenv'
dotnenv.config();



const Navbar=()=>{
    const [State,setState]=useState(localStorage.getItem('State'));
    const [creator,setcreator]=useState(localStorage.getItem('creator'));
    console.log(State);
console.log(creator);
    const fetchdata=(data,st)=>{
 setcreator(data);
 setState(st);

    }
    
    
    const logout= ()=>{
        fetch(`${process.env.REACT_APP_BASE_URL}v1/apis/logout`,
            {
            method:'post',
            credentials:'same-origin'

        }
        ).then((res)=>res.json()).then((res)=>{
            console.log(res.message);
            localStorage.setItem('State','logout');
            alert(res.message);
            setState(localStorage.getItem('State'));
            window.location.reload();
        })
    }
    return (
        <div className="nav-container">
            <div className="navbar">
            <Link to='/' reloadDocument>
            <img src={logo} alt="" className="nav-logo"/>
            </Link>
            <div className="page-items">
                <ul>
                    {/* <li><Link to='/creators' reloadDocument >Creaters</Link></li>
                    <li><Link to='/communities' reloadDocument >Communities</Link></li>
                    <li><Link to='/brands' reloadDocument  >Brands</Link></li> */}
                    {/* <li><Link to='/promotions' reloadDocument >Promotions</Link></li> */}
                </ul>
            </div>
            <div className="nav-icons-list">
              { (State==='login')?(creator==='true')?<Popup trigger={<button type="button" style={{cursor:'pointer',fontFamily:'Jost',borderRadius:'10px', backgroundColor:'white',color:'#1c1826',fontWeight:'700',outline:'none',border:'none',}}>Update Creator Id</button>} closeOnDocumentClick={false} modal>
                    {
                        close=>(
                            <Update close={close}/>
                           
                        )
                    }
                </Popup>:<Popup trigger={<button type="button" style={{cursor:'pointer',fontFamily:'Jost',borderRadius:'10px', backgroundColor:'white',color:'#1c1826',fontWeight:'700',outline:'none',border:'none',}}>Register as Creator</button>} closeOnDocumentClick={false} modal>
                    {
                        close=>(
                            <Register close={close}/>
                        )
                    }
                </Popup>:<></>
}
                {
                    (State!=='login')?
                <Popup trigger={<button type="button" style={{cursor:'pointer',fontFamily:'Jost',borderRadius:'10px', backgroundColor:'white',color:'#1c1826',fontWeight:'700',outline:'none',border:'none',}}>Sign Up/ Login</button>} modal>
                {
                        close=>(
                            <Login setResponse={fetchdata}/>
                        )
                    }
                </Popup>
                :<button type="button" onClick={logout} style={{cursor:'pointer',fontFamily:'Jost',borderRadius:'10px', backgroundColor:'white',color:'#1c1826',fontWeight:'700',outline:'none',border:'none',}}>Log Out</button>
}
         {/* <div className="nav-icon">
           <Link to='#'> <img src={search_icon} alt=""  /></Link> 
         </div>
         <div className="nav-icon">
           <Link to='#'><img src={profile_icon} alt=""  /></Link> 
         </div>
         <div className="nav-icon">
            <Link to='#'><img src={cart_icon} alt=""  /></Link>
         </div> */}
            </div>
        </div>
        </div>
    )
}
export default Navbar;
