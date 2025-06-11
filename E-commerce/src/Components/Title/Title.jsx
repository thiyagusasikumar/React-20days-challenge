import React from 'react'
import './Title.css'
const Title = ({subTitle,Titles}) => {
  return (
    <div className='title'>
        <h1>{subTitle}</h1>
        <p>{Titles}</p>

    </div>
  )
}

export default Title