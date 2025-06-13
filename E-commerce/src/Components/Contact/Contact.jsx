import React from 'react'
import './Contact.css'
import msg from '../../assets/msg-icon.png'
import mail from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import location from '../../assets/location-icon.png'
const Contact = () => {
  return (
    <div className='contact container '>
        <div className='left'>
            <div className='message'>
                <h1>Send us a message </h1>
                <img src={msg} alt="" />
            </div>
            <p className='left-p'>Feel free to reach out through contact form or find our contact information below. 
                Your feedback, questions, and suggestions are important to us as we strive to provide
                exceptional service to our university community.</p>
            <div className='mainInfo'>
            <div className='information'>
                <img src={mail} alt="" /> 
                <p>sthiyagusasikumark@gmail.com</p>
            </div>
            <div className='information'>
                <img src={phone} alt="" /> 
                <p>9360977635</p>
            </div>
            <div className='information'>
                <img src={location} alt="" /> 
                <p>32/1 Balamurugan Kovil Street Thathaneri Madurai-18</p>
            </div>
            </div>
        </div>
        <div className='right'>
            <form className='form' action="">
                <div className='element'>
                <label >Your Name</label>
                <input type="text" placeholder='Enter Your Name'/>
                </div>
                <div className='element'> 
                <label >Phone Number</label>
                <input type="tel" placeholder='Enter Your Phone Number '/>
                </div>
                <div className='element'>
                <label >Your Email</label>
                <input type="email" placeholder='Enter Your Phone Number '/>
                </div>
                <div className='element'>
                <label >Write your messages here</label>
                <input type="text" placeholder='Enter Your Phone Number '/>
                </div>
            </form>
            
        </div>
    </div>
  )
}

export default Contact