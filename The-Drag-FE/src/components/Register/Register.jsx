import React from 'react'
import './Register.css'
import categories from '../../assets/categories'
import images from '../../assets/images'
import close_icon from '../../assets/close_icon.svg'
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
  var img;
const Register = ({close}) => {
    const {linkedin,insta,twitter,youtube,facebook}=images;

    const handlesubmit=async (e)=>{
    e.preventDefault();
    //  console.log(e.target.);
    console.log(img);
    const data={
        type:document.getElementById('type').value,
        userName:document.getElementById('username').value,
        location:document.getElementById('location').value,
        phone:document.getElementById('phone').value,
        profileImage:img,
        insta:document.getElementById('instaurl').value,
        instacount:document.getElementById('instacount').value,
        twitter:document.getElementById('twitterurl').value,
        twittercount:document.getElementById('twittercount').value,
        linkedin:document.getElementById('linkedinurl').value,
        linkedincount: document.getElementById('linkedincount').value,
        facebook:document.getElementById('facebookurl').value,
        facebookcount:document.getElementById('facebookcount').value,
        youtube:document.getElementById('youtubeurl').value,
        youtubecount:document.getElementById('youtubecount').value,
    
      }
    const formdata=new FormData();
    for(let key in data){
        formdata.append(key,data[key]);
    }

     await fetch(e.target.action,{
        method:'post',
        body: formdata,
        credentials:'include',
        
     }).then((res)=>res.json()).then((res)=>{
        if(!res.success){
            alert(res.error);
            
        }
        else {
            localStorage.setItem('creator',true);
            window.location.reload();
        }
     })
    }
  return (
    <div className='register-container'>
        <h3>Enter Details</h3>
         <form action={`${process.env.REACT_APP_BASE_URL}v1/apis/register`}  encType='multipart/form-data'  method='post' onSubmit={(e)=>handlesubmit(e)} >
 <div className="username">
    <label htmlFor="username">User Name</label>
    <input type="text" name="userName" id="username" />
 </div>
            <div className="Type">
                <label htmlFor="type">Type</label>
                <select name="type" id="type">
                    {
            categories.map((ele)=><option value={ele}>{ele}</option>)
                    }
                </select>
            </div>
            <div className="Location">
                <label htmlFor="location">Location</label>
                <select name='location' id='location'>
 {
     States.map((item)=><option value={item}>{item}</option>)
 }
                </select>
            </div>
            <div className="contacts">
                
                <div className="mobileNo">
                    <label htmlFor="phone">
                       Mobile No.
                    </label>
                    <input type="tel"  name="phone" id="phone" placeholder='XXXXX-XXXXX'/>
                </div>
                <div id='profileImage'>
                <label htmlFor="profileImage">Profile Image</label>
            <input type="file" name="profileImage" id="profileImage"  onChange={e=>{img=e.target.files[0]}}  />
                
                
            </div>
            <div className="insta">
                
                <div>
                <label htmlFor="insta"><img src={insta}/>Instagram </label>
                <input type="url" name="insta" id="instaurl" placeholder='Enter URL' />
                </div>
                <div>
                <label htmlFor="insta"><img src={insta}/>Followers </label>
                <input type='number' name="instacount" id="instacount" min={0}  />
                </div>

            </div>
            <div className="linkedin">
                <div>
                <label htmlFor="linkedinurl"><img src={linkedin}/>Linkedin </label>
                <input type="url" name="linkedin" id="linkedinurl"  placeholder='Enter URL' />
                </div>
                <div>
                <label htmlFor="linkedincount"><img src={linkedin}/>Followers </label>
                <input type="number" name="linkedincount" id="linkedincount" min={0}  />
                </div>

            </div>
            <div className="twitter">
          <div>
          <label htmlFor="twitterurl"><img src={twitter}/>Twitter </label>
          <input type="url" name="twitter" id="twitterurl"  placeholder='Enter URL' />
          </div>
          <div>
          <label htmlFor="twittercount"><img src={twitter}/>Followers </label>
          <input type="number" name="twittercount" id="twittercount" min={0}   />
          </div>
            </div>
            <div className="facebook">
         <div>
         <label htmlFor="facebookurl"><img src={facebook}/>Facebook </label>
         <input type="url" name="facebook" id="facebookurl"  placeholder='Enter URL' />
         </div>
         <div>
         <label htmlFor="facebookcount"><img src={facebook}/>Followers </label>
         <input type="number" name="facebookcount" id="facebookcount" min={0} />
         </div>
            </div>
            <div className="youtube">
               <div>
               <label htmlFor="youtubeurl"><img src={youtube}/>Youtube </label>
               <input type="url" name="youtube" id="youtubeurl"  placeholder='Enter URL' />
               </div>
               <div>
               <label htmlFor="youtubecount"><img src={youtube}/>Followers </label>
               <input type="number" name="youtubecount" id="youtubecount" min={0}   />
               </div>
            </div>
            
            </div>

            

         <button >Submit</button>
         </form>
         <img src={close_icon} alt="" width={50} height={50} onClick={close} style={{cursor:'pointer'}}/>
    </div>
  )
}

export default Register
