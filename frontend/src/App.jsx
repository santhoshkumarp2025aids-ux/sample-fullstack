import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/projects'
import Login from './pages/login'
import Task from './pages/task'
import Clients from './pages/clients'
import Calender from './pages/calender'
import Settings from './pages/settings'
import Team from './pages/team'
import Dashboard from './pages/dashboard'
import Register from './pages/register'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/task' element={<Task/>}></Route>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/calender' element={<Calender/>}></Route>
      <Route path='/clients' element={<Clients/>}></Route>
      <Route path='/settings' element={<Settings/>}></Route>
      <Route path='/team' element={<Team/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App 