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
            <h1>Send us a message <img src={msg} alt="" /></h1>
            <p>Feel free to reach out through contact form or find our contact information below. 
            Your feedback, questions, and suggestions are important to us as we strive to provide
            exceptional service to our university community.</p>
            <div>
                <img src={mail} alt="" /> <p>sthiyagusasikumark@gmail.com</p>
            </div>
            <div>
                <img src={phone} alt="" /> <p>9360977635</p>
            </div>
            <div>
                <img src={location} alt="" /> <p>32/1 Balamurugan Kovil Street Thathaneri Madurai-18</p>
            </div>
        </div>
        <div className='right'>
            hello
        </div>
    </div>
  )
}

export default Contact