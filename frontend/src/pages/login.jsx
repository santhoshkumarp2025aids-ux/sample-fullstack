import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { registerSchema } from '../components/formschema/registerschema'

function Login() {
  const Navigate=useNavigate()
  const location = useLocation()
  const registerdata=location.state;
  const [logindata, setlogindata] = useState({
    email:"",
    password:""
  })

  function print(e) {
    e.preventDefault()
    // console.log(formdata)
    console.log("login page", logindata)
    alert("Login Successfully")
    if(logindata.email=== registerdata.email &&
      logindata.password === registerdata.password){
      console.log("login successfully");
    }
    else{
        console.log("invalid")
    }
    Navigate("/dashboard",{state:logindata})
  }

function handleChange(e) {
  setlogindata({
    ...logindata,
    [e.target.name]: e.target.value
  })
}

  return (
    <>
      <div className="min-h-screen flex justify-center items-center">
        <form onSubmit={(e)=>print(e)}>
          <label className="block text-black text-blue-500">Email :</label>
          <input placeholder="Enter your email" required type="email" name='email' onChange={handleChange}
          className="border p-1 rounded"/>
          <br />

          <label className="block text-black text-blue-500">Password :</label>
          <input placeholder="Enter your password" required type="password" name='password' onChange={handleChange}
          className="border p-1 rounded"/>
          <br/>
          <br/>
          <button type="submit" className=" bg-purple-600 text-white p-3 rounded-lg font-bold hover:bg-purple-800">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login