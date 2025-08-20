import { Header } from './Components/Header/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import { SetProvider } from './Context/UseSetContext'
import { SelectedSetProvider } from './Context/UseSelectedSet'


export default function App() {
  
  return (
    <>
      <SetProvider>
        <SelectedSetProvider>
          <Header />
          <Outlet />
        </SelectedSetProvider>
      </SetProvider>
    </>
  )
}
