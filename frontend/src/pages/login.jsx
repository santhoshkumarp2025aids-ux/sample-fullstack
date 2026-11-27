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
    if(logindata.email=== registerdata.email && logindata.password === registerdata.password){
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

      <h1 className="text-3xl font-bold text-blue-500">Hi!</h1>
      <br />
      <div>
        <form onSubmit={(e)=>print(e)}>
          <label>Email :</label>
          <input placeholder="Enter your email" required type="email" name='email' onChange={handleChange} />
          <br />

          <label>Password :</label>
          <input placeholder="Enter your password" required type="password" name='password' onChange={handleChange}/>
          <br />
          <br/><br/>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login