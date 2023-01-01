import React from 'react'
import '../css/Profile.css'
import { useAuth0 } from '@auth0/auth0-react';


function Profile() {
  const { user } = useAuth0();
  return (
    <div className='Profile'>
        <div  className="Profile-image" >
          <img src={user.picture} id='userphot' alt='hero'/>
          <div className="Profile-name">
            <h2>{user.name}</h2> 
          </div>
        </div>
        <div className='Create-history'>
          <h1 className='headclass'>Remember your History</h1><br/>
          <div className='filldata'>

          <h2 className='h22'>Choose date</h2>
          <input type="date" className='givedate'/>
          </div>
          <div className='filldata'>
          <h2 className='h22'>Event Name</h2>
          <input type="event" className='giveevent'/>
          </div>          

          <div className="nav-item cret">Create</div>          
        </div>

        <article class="leaderboard">
          <header>
            {/* <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 511.999 511.999" style="enable-background:new 0 0 511.999 511.999;" xml:space="preserve" class="leaderboard__icon"/> */}
            <h1 class="leaderboard__title"><span class="leaderboard__title--top">Your History</span><span class="leaderboard__title--bottom">to remember</span></h1>
          </header>
  
          <main class="leaderboard__profiles">
            
            <article class="leaderboard__profile">
              <span class="leaderboard__name">Marriage Anniversary</span>
              <span class="leaderboard__value">March 21</span>
            </article>
            
            <article class="leaderboard__profile">
              <span class="leaderboard__name">Birthday</span>
              <span class="leaderboard__value">11 December</span>
            </article>
            
            <article class="leaderboard__profile">
              <span class="leaderboard__name">Father's Birthday</span>
              <span class="leaderboard__value">August 1</span>
            </article>
            
            <article class="leaderboard__profile">
              <span class="leaderboard__name">Son's Birthday</span>
              <span class="leaderboard__value">July 1</span>
            </article>
          </main>
        </article>
    </div>

    // <div>Profile</div>
  )
}

export default Profile