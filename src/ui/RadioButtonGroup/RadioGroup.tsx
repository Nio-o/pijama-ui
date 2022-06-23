import React, { useCallback, useMemo } from 'react'

import type { RadioContextProps, SetSelectedOptionHandler } from './RadioGroupContext'
import { RadioContext } from './RadioGroupContext'

export type RadioGroupChangeHandler = (option: string) => unknown

interface RadioGroupProps {
  name: string
  value: string
  onChange?: RadioGroupChangeHandler
}

export const RadioGroup: React.FC<RadioGroupProps> = ({ name, value, children, onChange }) => {
  const handleSelect = useCallback<SetSelectedOptionHandler>(
    (option) => {
      onChange?.(option)
    },
    [onChange],
  )

  const uniqueName = useMemo(() => name, [name])

  const ctxValue = useMemo<RadioContextProps>(
    () => ({
      name: uniqueName,
      selected: value,
      setSelectedOption: handleSelect,
    }),
    [uniqueName, value, handleSelect],
  )

  return <RadioContext.Provider value={ctxValue}>{children}</RadioContext.Provider>
}
