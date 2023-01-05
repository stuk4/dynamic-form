import React, { useState } from 'react'

export interface IDynamicFormsState {
  objectType: string
}
export interface IDynamicFormsContext {
  dynamicForm: IDynamicFormsState
  updateObjectType: (objectType: string) => void

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dynamicForm, setDynamicForm] = useState<IDynamicFormsState>({
    objectType: '1'
  })

  const updateObjectType = (objectType: string): void => {
    setDynamicForm({ ...dynamicForm, objectType })
  }

  return (
    <DynamicFormsContext.Provider value={{ dynamicForm, updateObjectType }}>
        {children}
    </DynamicFormsContext.Provider>
  )
}
