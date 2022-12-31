import { useState } from 'react';
import '../css/Home.css'
import arrow from '../images/arrow.png'

export default function Home() {
  const [message, setMessage] = useState('');

  const [updated, setUpdated] = useState(message);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleClick = () => {
    setUpdated(message);
  };
  const handleKeyDown=(e)=>{
    if(e.key==='Enter'){
        handleClick()
    }
  }
  return (
    <div className='main'>
        <p className='des'> Enter a year between 1900-2021:</p>
  
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleChange}
        value={message}
        onKeyDown={handleKeyDown}
      />
      
      
      
        <h2 id='test'>{updated}</h2>
    </div>
  );
}