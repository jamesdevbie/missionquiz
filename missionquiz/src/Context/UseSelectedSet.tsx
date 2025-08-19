import React, {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from 'react'

const SetSelectedContext = createContext(
  'undefined' as unknown as {
    selectedSet: string
    setSelectedSet: React.Dispatch<React.SetStateAction<string>>
  }
)

export const SelectedSetProvider = ({ children }: { children: ReactNode }) => {
  //This needs to be a string
  const [selectedSet, setSelectedSet] = useState<string>('')

  return (
    <SetSelectedContext.Provider
      value={{
        selectedSet,
        setSelectedSet,
      }}
    >
      {children}
    </SetSelectedContext.Provider>
  )
}

const useSelectedSetContext = () => {
  const context = useContext(SetSelectedContext)
  if (!context) {
    throw new Error(
      'useSelectedSetContext must be used within a SelectedSetProvider'
    )
  }
  return context
}

export default useSelectedSetContext
