import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from '../src/pages/projects'
import Login from '../src/pages/login'
import Task from '../src/pages/task'
import Settings from './pages/settings'
import Calender from './pages/calender'
import Dashboard from './pages/dashboard'
import Clients from './pages/clients'
import Team from './pages/team'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login/>}></Route>
    <Route path="/project" element={<Projects/>}></Route>
    <Route path="/task" element={<Task/>}></Route>
    <Route path="/settings" element={<Settings/>}></Route>
    <Route path="/calender" element={<Calender/>}></Route>
    <Route path="/dashboard" element={<Dashboard/>}></Route>
    <Route path="/team" element={<Team/>}></Route>
    <Route path="/clients" element={<Clients/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
  


export default App