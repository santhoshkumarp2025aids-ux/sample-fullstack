import { useState } from 'react'

function Dashboard() {
const location = uselocation();
const [count, setCount] = useState("")

function displaydata(){
    setuserdata(location.State);
    console.log(userdata)
}
return (
    <>
    <h1> <button onClick={displaydata}>click it!</button>
</h1>
    </>
)
}

export default Dashboard