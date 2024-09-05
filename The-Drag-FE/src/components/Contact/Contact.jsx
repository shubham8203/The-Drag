import React from 'react'
import './Contact.css'
import close_icon from '../../assets/close_icon.svg'
import dotenv from 'dotenv'
dotenv.config();

const Contact = ({creatorEmail,name,close}) => {
 
    const handleContact=async (e)=>{
          e.preventDefault();
          const data={
            subject:document.getElementById('subject').value,
            body:document.getElementById('body').value,
            attachment:document.getElementById('attachment').files[0],
            creatormail:creatorEmail,
         }
         console.log(data);
         const formdata=new FormData();
         for(let key in data){
            formdata.append(key,data[key]);
         }
           await fetch(e.target.action,{
            method:'post',
            body:formdata,
            credentials:'include'
           }).then((res)=>res.json()).then((res)=>{
            if(res.success){
                alert(res.message);
                window.location.reload();
            }
            else {
                alert(res.error);
                window.location.reload();
            }
           })
    }

  return (
    <div className='contact-container'>
        <div className="email">
                <p>To:</p>
                <p className='email-main'>{`${name} <${creatorEmail}>`}</p>
                
            </div>
        <form className='contact-form' action={`${process.env.REACT_APP_BASE_URL}v1/apis/contact`} method="post" encType='multipart/form-data' onSubmit={(e)=>handleContact(e)}>
            
            <div className="subject">
                <label htmlFor="subject">Subject:</label>
                <input type="text" id='subject' name='subject' />
            </div>
            <div className="body">
                <label htmlFor="body">Message:</label>
               <textarea name="" id="body"    ></textarea>
            </div>
            <div className="attachment">
                <p>Attachment:</p>
                <div>
                <label htmlFor="attachment">Drag Your Files Here <p style={{textAlign:'center'}}>Or</p></label>
                <input type="file" name="attachment" id="attachment"></input>
                </div>
                
            </div>
            <button type="submit">SEND</button>
        </form>
        <img src={close_icon} alt="" width={40} height={40} onClick={close} style={{cursor:'pointer'}}/>
      
    </div>
  )
}

export default Contact
