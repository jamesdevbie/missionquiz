import { Header } from './Components/Header/Header'
import './App.css'
import { Outlet } from 'react-router-dom'
import { SetProvider } from './Context/UseSetContext'
import { SelectedSetProvider } from './Context/UseSelectedSet'
import { StageProvider } from './Context/UseStageContext'
import { QuestionContextProvider } from './Context/useQuestionContext'

export default function App() {
  return (
    <>
      <StageProvider>
        <SetProvider>
          <SelectedSetProvider>
            <QuestionContextProvider>
              <Header />
              <Outlet />
            </QuestionContextProvider>
          </SelectedSetProvider>
        </SetProvider>
      </StageProvider>
    </>
  )
}
