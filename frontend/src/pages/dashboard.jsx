import { useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

function Dashboard() {
  const location=useLocation();
  const[userdata,setuserdata]=useState("")

  function displayData(){
    setuserdata(location.state);
    console.log(location.state  )
  }
  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500">
        Dashboard
      </h1>
      <br></br>
      <button onClick={displayData}>display data</button>
    </>
  )
}

export default Dashboard