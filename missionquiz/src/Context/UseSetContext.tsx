import React, { createContext, useContext, useState, type ReactNode } from 'react'
import { type QUESTION_TYPE } from '../assets/Constants'

type SetContextType = {
  setOne: QUESTION_TYPE[]
  setTwo: QUESTION_TYPE[]
  setThree: QUESTION_TYPE[]
  setFour: QUESTION_TYPE[]
  rightAnswerCount: number
  setRightAnswerCount: React.Dispatch<React.SetStateAction<number>>
  setSetOne: React.Dispatch<React.SetStateAction<QUESTION_TYPE[]>>
  setSetTwo: React.Dispatch<React.SetStateAction<QUESTION_TYPE[]>>
  setSetThree: React.Dispatch<React.SetStateAction<QUESTION_TYPE[]>>
  setSetFour: React.Dispatch<React.SetStateAction<QUESTION_TYPE[]>>
}

const SetContext = createContext<SetContextType | undefined>(undefined)

export const SetProvider = ({ children }: { children: ReactNode }) => {
  const [setOne, setSetOne] = useState<QUESTION_TYPE[]>([])
  const [setTwo, setSetTwo] = useState<QUESTION_TYPE[]>([])
  const [setThree, setSetThree] = useState<QUESTION_TYPE[]>([])
  const [setFour, setSetFour] = useState<QUESTION_TYPE[]>([])
  const [rightAnswerCount, setRightAnswerCount] = useState(0)

  return (
    <SetContext.Provider
      value={{
        setOne,
        setTwo,
        setThree,
        setFour,
        setSetOne,
        setSetTwo,
        setSetThree,
        setSetFour,
        rightAnswerCount,
        setRightAnswerCount,
      }}
    >
      {children}
    </SetContext.Provider>
  )
}

const useSetContext = () => {
  const context = useContext(SetContext)
  if (!context) {
    throw new Error('useSetContext must be used within a SetProvider')
  }
  return context
}

export default useSetContext
