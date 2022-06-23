import { createContext, useContext } from 'react'

export type SetSelectedOptionHandler = (opt: string) => unknown

export interface RadioContextProps {
  name: string
  setSelectedOption: SetSelectedOptionHandler
  selected?: string
}

export const RadioContext = createContext<RadioContextProps | undefined>(undefined)

export const useRadioContext = () => useContext(RadioContext)
