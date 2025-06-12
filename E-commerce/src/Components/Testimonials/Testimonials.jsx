import React from 'react'
import './Testimonials.css'
import next from '../../assets/next-icon.png'
import back from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
  return (
    <div className='container testimonials'>
      <img className='nextBtn' src={next} alt="" />
      <img className='backBtn' src={back} alt="" />
      <div className='slider'> 
        <ul>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_2} alt="" />
                    <div className='user_details' >
                      <h1>Thiyagu S</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>Rajam Institute of Computer Excellence provides high-quality, practical tech training.
                          The instructors are knowledgeable and supportive throughout the learning journey.
                          Modern labs and real-time projects help us gain valuable hands-on experience.
                          I'm proud to be part of an institute that genuinely empowers future tech professionals.</p>
                  </div>
              </div>
          </li>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_2} alt="" />
                    <div className='user_details' >
                      <h1>Aditiya Dharshan</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>Rajam Institute of Computer Excellence provides high-quality, practical tech training.
                          The instructors are knowledgeable and supportive throughout the learning journey.
                          Modern labs and real-time projects help us gain valuable hands-on experience.
                          I'm proud to be part of an institute that genuinely empowers future tech professionals.</p>
                  </div>
              </div>
          </li>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_2} alt="" />
                    <div className='user_details' >
                      <h1>Aditiya Dharshan</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>Rajam Institute of Computer Excellence provides high-quality, practical tech training.
                          The instructors are knowledgeable and supportive throughout the learning journey.
                          Modern labs and real-time projects help us gain valuable hands-on experience.
                          I'm proud to be part of an institute that genuinely empowers future tech professionals.</p>
                  </div>
              </div>
          </li>
          <li>
              <div className='slide'>
                  <div className='user'>
                    <img src={user_2} alt="" />
                    <div className='user_details' >
                      <h1>Aditiya Dharshan</h1>
                      <h3>Madurai,Tamilnadu</h3>
                    </div>
                  </div>
                  <div className='review'>
                      <p>Rajam Institute of Computer Excellence provides high-quality, practical tech training.
                          The instructors are knowledgeable and supportive throughout the learning journey.
                          Modern labs and real-time projects help us gain valuable hands-on experience.
                          I'm proud to be part of an institute that genuinely empowers future tech professionals.</p>
                  </div>
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials