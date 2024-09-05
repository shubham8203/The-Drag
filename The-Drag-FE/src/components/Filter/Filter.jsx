import React from 'react'
import './Filter.css'
import categories from '../../assets/categories'
import dotenv from 'dotenv'
dotenv.config();

const States = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal"
];

const Filter = ({helper,close}) => {

    const filter=()=>{
      const data={
        type:document.getElementById('type').value,
        count:document.getElementById('count').value,
        sort:document.getElementById('sort').value,
        location:document.getElementById('location').value,
        platform:document.getElementById('platform').value
      }
      console.log(data);
     fetch(`${process.env.REACT_APP_BASE_URL}v1/apis/filter`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        Accept:'application/json'
      },
      body:JSON.stringify(data)

     }).then(res=>res.json()).then(res=>{
      console.log(res.success);
      console.log(res.data);
      helper(res.data);
     })
     
    }


  return (
    <div className='filter-popup'>
      <h3>Search Filters</h3>
      <form className='filter-form' target='_blank'  onSubmit={(e)=>{filter();e.preventDefault();close()}}   >
        <div className='sort'>
          <label htmlFor="sort">Sort by</label>
          <select name="sort" id="sort"   >
            <option value="asc">Ascending{"(Followers)"}</option>
            <option value="des">Descending{"(Followers)"}</option>

          </select>
        </div>
        <div className='types'>
          <label htmlFor="type">Type</label>
          <select name="type" id="type"  >
            {
              categories.map((ele) => (<option val={ele}>{ele}</option>))
            }

          </select>

        </div>
        <div className='location'>
          <label htmlFor="location">
            Location
          </label>
          <select name="location" id="location"  >
             {
              States.map((state)=>(<option value={state}>{state}</option>))
             }
          </select>

        </div>
        <div className='platform'>
          <label htmlFor="platform">Main Platform</label>
          <select name="platform" id="platform"  >
            <option value="insta">Instagram</option>
            <option value="linkedin">Linked In</option>
            <option value="facebook">Facebook</option>
            <option value="twitter">Twitter</option>
            <option value="youtube">Youtube</option>
            
          </select>

        </div>
        <div className='follower-count'>
          <label htmlFor="follower-count">Followers Count</label>
          <select name="count" id="count" >
        
            <option value="0-1000" >0 - 1000</option>
            <option value="1000-5000" >1000 - 5000</option>
            <option value="5000-10000" >5000 - 10,000</option>
            <option value="10000-50000" >10,000 - 50,000</option>
            <option value="50000-100000" >50,000 - 100000</option>
            <option value="100000-500000" >100000 - 500000</option>
            <option value="500000-700000" >500000 - 700000</option>
            <option value="700000-1000000 " >700000 - 1000000</option>
            <option value="1000000-" > Above 1000000</option>


          </select>
          
        </div>

           <button type="submit"  >Done</button>
      </form>

    </div>
  )
}

export default Filter
