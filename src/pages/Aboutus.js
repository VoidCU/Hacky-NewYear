import React from 'react'
import '../css/aboutus.css'

function Aboutus() {
  return (
    <div className='main'>
      <h1>About Us</h1>
      <hr />
      <div className='members'>
      <div class="member">
        <img src="https://avatars.githubusercontent.com/u/47562404?v=4" alt="Prasaya Acharya" class="profilepic"/>
        <p>Prasaya Acharya</p>
        </div>
      <div class="member">
        <img src="https://avatars.githubusercontent.com/u/51750221?v=4" alt="Sankalpa Rijal" class="profilepic"/>
        <p>Sankalpa Rijal</p>
        </div>
      <div class="member">
        <img src="https://avatars.githubusercontent.com/u/98652711?v=4" alt="Saroj Prasad Mainali" class="profilepic"/>
        <p>Saroj Prasad Mainali</p>
      </div>
      </div>
    </div>
  )
}

export default Aboutus