
import React from 'react'
import { Field } from '../interfaces/IForms'

import { useDynamicContext } from '../hooks/useDynamicContext'

export interface IDynamicFormsContext {
  saveForm: (form: Field[]) => void
  updateDynamicForm: (objType: string) => void
  dynamicForm: Field[]
  savedForms: [Field[]]
  loading: boolean

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { dynamicForm, loading, saveForm, savedForms, updateDynamicForm } = useDynamicContext()
  return (
    <DynamicFormsContext.Provider
      value={{
        saveForm,
        updateDynamicForm,
        savedForms,
        dynamicForm,
        loading
      }}>
      {children}
    </DynamicFormsContext.Provider>
  )
}
