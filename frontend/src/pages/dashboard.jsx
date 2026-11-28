import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import API from '../components/api';
function Dashboard() {
  const location=useLocation();
  const[userdata,setuserdata]=useState("")

  {/*function displayData(){
    setuserdata(location.state);
    console.log(location.state  )
  }*/}

  useEffect(()=>{setuserdata(location.state)},[])

  const checkendpoint=async()=>{
        const response=await API.get("/api/get");
        console.log(response.data);
    }

  return (
    <>
    <h1 className="text-3xl font-bold text-blue-500">
        Dashboard
      </h1>
      <div>{userdata.email}</div>
      <div>{userdata.password}</div>
      <br></br>
      <button onClick={checkendpoint}>display data</button>

    </>
  )
}

export default Dashboard