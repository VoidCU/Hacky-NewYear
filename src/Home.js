import React from 'react'
import './Home.css'
import arrow from './arrow.png'

function Home() {
  return (
    <div className='main'>
        <p className='des'> Enter a year between 1700-2021:</p>
        <input className='year-here' type='text' ></input>
        <img src={arrow} className="arrow" alt="arrow" onClick={herecall()}/>
    </div>

  )
}

export default Home


function herecall(){
    console.log("man")
}