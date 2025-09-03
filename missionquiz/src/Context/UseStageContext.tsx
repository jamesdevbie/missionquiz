import { createContext, useContext, useState, type ReactNode } from 'react'

interface StageContextType {
  stage: string
  setStage: React.Dispatch<React.SetStateAction<string>>
}

export const stageContext = createContext<StageContextType | undefined>(
  undefined
)

export const StageProvider = ({ children }: { children: ReactNode }) => {
  const [stage, setStage] = useState('')

  return (
    <stageContext.Provider value={{ stage, setStage }}>
      {children}
    </stageContext.Provider>
  )
}

const useStageContext = () => {
  const context = useContext(stageContext)
  if (!context) {
    throw new Error('useStageContext must be used within a StageProvider')
  }
  return context
}

export default useStageContext
