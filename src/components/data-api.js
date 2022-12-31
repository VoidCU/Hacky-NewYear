import { useState } from 'react'
import axios from "axios";
// import logo from './logo.svg';

function DataAPI() {

   // new line start

  function getData() {
    console.log("inside get data");
    let data = 2001;
    axios({
      method: "POST",
      url:`http://localhost:5000/year?year=${data}`,
      data:'2001'
    })
    .then((response) => {
      const res =response.data
      console.log(res);
    }).catch((error) => {
      if (error.response) {
        console.log(error.response)
        console.log(error.response.status)
        console.log(error.response.headers)
        }
    })}
    //end of new line 

  return (
    <div className="DataAPI">
      <button onClick={getData}>Click me</button>
    </div>
  );
}

export default DataAPI;