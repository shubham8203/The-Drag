import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import  DragContext  from './Context/Dragcontext.js';
import brands from './assets/brands.js';
import creators from './assets/creators.js';
import communities from './assets/communities.js'
import dotenv from 'dotenv'
dotenv.config()




const root = ReactDOM.createRoot(document.getElementById('root'));
var creatordata;
console.log(process.env.REACT_APP_BASE_URL);
 fetch(`${process.env.REACT_APP_BASE_URL}v1/apis/`).then((res)=>res.json()).then((res)=>{creatordata=res.data;console.log(creatordata);root.render(
  <React.StrictMode>
    <DragContext.Provider value={{brands,creators,communities,creatordata}} >
     <App />
    </DragContext.Provider>
   
  </React.StrictMode>
);
});

