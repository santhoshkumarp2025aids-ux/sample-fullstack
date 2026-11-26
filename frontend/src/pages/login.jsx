import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

{/*function Login() {
const [count, setCount] = useState(0)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")*/}


function Login(){
const  Navigate=useNavigate()
const [formdata,steFormdata]=useState({
username:"",
password:""
}
)
function print(e) {
    e.preventDefault()
    console.log(formdata)
    console.log("Login page",formdata)
    alert("login successfully")
    Navigate("/dashboard",{state:formdata} )
}


function Handlechange(e){
    steFormdata({
        ...formdata,[e.target.name]:e.target.value
})}

return (
    <>
<h1 className="text-3xl font-bold text-blue-500">Hi!</h1>
<br />
<div>
<form onSubmit={print}>

<label>Email :</label>

<input placeholder="Enter your username" required type="text" name='username'
            onChange={Handlechange}/>

<br />

<label>Password :</label>
<input placeholder="Enter your password" required type="password" name='password'
            onChange={Handlechange}/>

<br />
<button type="submit">Submit</button>
</form>
</div>
</>
)

} 
export default Login