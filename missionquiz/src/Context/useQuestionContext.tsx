import { createContext, useContext, useState, type ReactNode } from 'react'
import { type QUESTION_TYPE } from '../assets/Constants'

export interface QuestionContextType {
  questionSet: QUESTION_TYPE[]
  setQuestionSet: React.Dispatch<React.SetStateAction<QUESTION_TYPE[]>>
}

export const questionContext = createContext<QuestionContextType | undefined>(
  undefined
)

export const QuestionContextProvider = ({
  children,
}: {
  children: ReactNode
}) => {
  const [questionSet, setQuestionSet] = useState<QUESTION_TYPE[]>([])
  return (
    <questionContext.Provider value={{ questionSet, setQuestionSet }}>
      {children}
    </questionContext.Provider>
  )
}
const useQuestionContext = () => {
  const context = useContext(questionContext)
  if (!context) {
    throw new Error('useQuestionContext must be used within a QuestionProvider')
  }
  return context
}
export default useQuestionContext
