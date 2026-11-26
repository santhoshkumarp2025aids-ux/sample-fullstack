import { useState } from 'react'
function Projects() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1 className="text-blue-500">
        Projects
      </h1>
      <><label >
        email:
        </label></>
        <input placeholder="Enter your email">
        </input>
    </>
  )
}

export default Projects