import { useState } from 'react'

function Login() {
const [count, setCount] = useState(0)
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
function print(e) {
    e.preventDefault()
    console.log("Email: ", email)
    console.log("Password: ", password)
}

return (
    <>
<h1 className="text-3xl font-bold text-blue-500">Hi!</h1>
<br />
<div>
<form onSubmit={print}>

<label>Email :</label>

<input placeholder="Enter your email" required type="email" value={email}
            onChange={(e) => setEmail(e.target.value)}/>

<br />

<label>Password :</label>

<input placeholder="Enter your password" required type="password" value={password}
            onChange={(e) => setPassword(e.target.value)}/>

<br />
<button type="submit">Submit</button>
</form>
</div>
</>
)
}

export default Login