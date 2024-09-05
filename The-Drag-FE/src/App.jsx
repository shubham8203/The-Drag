import React from 'react';
import './App.css';
import  Navbar  from './components/Navbar/Navbar.jsx';
import Homepage from './Pages/HomePage/HomePage.jsx';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx';
import CreatorPage from './Pages/CreatorPage/CreatorPage.jsx';
import Community from './Pages/Community/Community.jsx';
import Brands from './Pages/Brands/Brands.jsx';
import Promotions from './Pages/Promotions/Promotions.jsx';
function App() {
  return (
    <div className='container'>
        
     <BrowserRouter>
       <Navbar/>
       <Routes>
        {/* <Route path='/' element={<Homepage/>}></Route>
        <Route path='/creators' element={<CreatorPage/>}></Route>
        <Route path='/communities' element={<Community/>}></Route>
        <Route path='/brands' element={<Brands/>}></Route> */}
        <Route path='/' element={<Promotions/>}></Route>
       </Routes>
       <Footer />
     </BrowserRouter>
   
    </div>
    
   
     

  );
}

export default App;
