import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Login() {
  const Navigate=useNavigate()
  const [formdata, setformdata] = useState({
    email:"",
    password:""
  })

  function print(e) {
    e.preventDefault()
    // console.log(formdata)

    console.log("login page", formdata)
    alert("Login Successfully")
    Navigate("/dashboard",{state:formdata})
  }

function handleChange(e) {
  setformdata({
    ...formdata,
    [e.target.name]: e.target.value
  })
}

  return (
    <>

      <h1 className="text-3xl font-bold text-blue-500"> Hi!</h1>
      <br />
      <div>
        <form onSubmit={(e)=>print(e)}>
          <label>Email :</label>
          <input placeholder="Enter your email" required type="email" name='email' onChange={handleChange} />
          <br />

          <label>Password :</label>
          <input placeholder="Enter your password" required type="password" name='password' onChange={handleChange}/>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}

export default Login