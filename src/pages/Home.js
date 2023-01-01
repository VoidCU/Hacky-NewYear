import { useState } from "react";
import '../css/Home.css'
import Sus from "./sustinable"
import Data from "../Sdata/Data.json"
import Domain from "twilio/lib/base/Domain";
import axios from "axios";


import messenger from '../images/mess.png';

export default function Home() {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  const [chem,getchem]=useState('');
  const [phy,getphy]=useState('');
  
  const handleChange = (event) => {
    if(event.target.value.length<5)
        setMessage(event.target.value);
  };

  function getData(message) {
    console.log("inside get data");
    let data =message;
    axios({
      method: "POST",
      url:`http://localhost:5000/year?year=${data}`
    })
    .then((response) => {
      const res =response.data
      getchem(res[0][["Nobel Prizes"]]["Chemistry"])
      getphy(res[0][["Nobel Prizes"]]["Physics"])
    })}

  function sendSMS(message) {
    console.log("inside send sms");
    let data =message;
    axios({
      method: "POST",
      url:`http://localhost:5000/sms`,
      body:{message},
    })
    .then((response) => {
      const res =response.data
      console.log(res)
    })}

  
  const handleKeyDown=(e)=>{

    if(e.key==='Enter' && (message>=1900 && message<=2022)){
      giveRandom(message)
      document.getElementById(e.target.id).blur()
      getData(message)
      // console.log(srapdata[["Nobel Prizes"]]["Chemistry"])
      // getchem(srapdata[["Nobel Prizes"]]["Chemistry"])
      // getphy(srapdata[["Nobel Prizes"]]["Physics"])
    }
      
  }

  const giveRandom=(a)=>{
    const x=Math.floor(Math.random()*Data[a-1900]['Events'].length)
    const y=Math.floor(Math.random()*Data[a-1900]['Events'][x]['Month-Day(s)-Events'].length)
    setUpdated(Data[a-1900]['Events'][x]['Month-Day(s)-Events'][y])
  }

  
  return (
    <div className='mainhome'>
        <p className='des'> Enter a year between 1900-2021:</p>

      <input
        type="number"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        onKeyDown={handleKeyDown}
        autoComplete="off" 
      />
       <br/>

      <div id="result">
      <div id='test'>
      <h2 id="did">Did you know?</h2>
      <p class="check">{updated}</p>
      </div>
      <div id="srap">
        <b>Nobel Prizes for Chemistry in {message}:</b><br/>{chem}
      <br/>
      <br/>
      <b>Nobel Prizes for Physics in {message}:</b><br/>
      {phy}
      </div>
      </div>
      <div id="scroll">
        <button id="scrolldown" onClick={GODown} class="button-33">Sustainability History Here!</button>
      </div>
      <div id="send-info-through-sms">
        <img src={messenger} onClick={messsend}/>
      </div>
      
      <div className="sussy">
      <h1 id="sust">Sustinability Timeline</h1>
      <Sus/>
      </div>
      
    </div>
  );
}

var mybutton = document.getElementById("scrolled");
async function GODown(){
  window.scrollBy(0,window.innerHeight-1)
  console.log(document.body.scrollHeight)
  mybutton.style.display = "none"

}


function messsend(){
  alert("History sent to SMS inbox!");
}

// function getData(message) {
//   console.log("inside get data");
//   let data =message;
//   axios({
//     method: "POST",
//     url:`http://localhost:5000/year?year=${data}`
//   })
//   .then((response) => {
//     const res =response.data
//     console.log(res[0])
//   })}


  