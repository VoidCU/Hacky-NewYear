import { useState } from "react";
import '../css/Home.css'
import Sus from "./sustinable"
import Data from "../Sdata/Data.json"
import Domain from "twilio/lib/base/Domain";
import axios from "axios";

export default function Home() {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);
  
  const handleChange = (event) => {
    if(event.target.value.length<5)
        setMessage(event.target.value);
  };

  
  const handleKeyDown=(e)=>{

    if(e.key==='Enter' && (message>=1900 && message<=2022)){
      giveRandom(message)
      getData(message)
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
      <h2 id='test'>{updated}</h2>
      
      <div className="sussy">
      <h1 id="sust">Sustinability Timeline</h1>
      <Sus/>
      </div>
      
    </div>
  );
}

function getData(message) {
  console.log("inside get data");
  let data =message;
  axios({
    method: "POST",
    url:`http://localhost:5000/year?year=${data}`
  })
  .then((response) => {
    const res =response.data
    console.log(res[0])
  })}