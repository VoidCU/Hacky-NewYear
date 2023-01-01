import React from 'react'
import '../css/aboutus.css'

function Aboutus() {
  // fetch('http://localhost:5000/sms', {  // Enter your IP address here
  //     method: 'POST', 
  //     body: "HI"// body data type must match "Content-Type" header
  //   })
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
      <form action="http://localhost:5000/sms" method='post' enctype="multipart/form-data">
      <div className='sendsmstoprasaya'>
        <input id="msghere" name="msghere" type="text" rows="4" cols="50" placeholder="You guys are doing great! It was nice using your webite.
        &#10;Wishes,
        &#10;Ramesh" />
        <input class="nav-item" id='sendme' type='submit' name='submit' value='send'/>
      </div>
      </form>
    </div>
  )
}

export default Aboutus