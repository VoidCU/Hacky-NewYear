import React from 'react'
import '../css/Home.css'
import arrow from '../images/arrow.png'

function Home() {
    // function jadu(el){
    //   el.parent().addClass('active');
    // }
    return (
    
    <div className='main'>
        <p className='des'> Enter a year between 1700-2021:</p>
        <input className='year-here' type='text' ></input>
        {/* <img src={arrow} className="arrow" alt="arrow" onClick={jadu(this)}/> */}
        <div className='details'></div>
    </div>

  )
}
export default Home

