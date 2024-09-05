import React, { useContext } from "react";
import Hero_carousel from "../../components/Hero-carousel/Hero-carousel";


import Communities from "../../components/Comunities/Communities";
import Brands from "../../components/Brands/Brands";
import Dragcontext from "../../Context/Dragcontext";
const Homepage=()=>{
   const {brands,creators}=useContext(Dragcontext);

return(
  <>
    <Hero_carousel/>
    <Brands name="Brands" category={brands}/>
    <Communities />
    <Brands name="Our Creators" category={creators}/>
  </>
  
)
}
export default Homepage;