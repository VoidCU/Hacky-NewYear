import { useState } from "react";
import '../css/Home.css'
import Sus from "./sustinable"


export default function Home() {
  const [message, setMessage] = useState('');
  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    if(event.target.value.length<5)
        setMessage(event.target.value);
  };

  const handleClick = () => {
    // let response=[]
    // fetch("http:", {method: "POST", headers: {'Content-Type':'application/json'}, body:message}).then(response = )
    setUpdated(message)
  };
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
        handleClick()
    }
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
      
      <h2 id='test'>{message}</h2>
      <h2 id='test'>{updated}</h2>
      <div className="sussy"><Sus/></div>
    </div>
  );
}
