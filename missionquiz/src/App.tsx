import { Header } from './Components/Header/Header'
import './App.css'
import { Outlet } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
