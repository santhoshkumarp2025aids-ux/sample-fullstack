import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/projects'
import Login from './pages/login'
import Task from './pages/task'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/task' element={<Task />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App