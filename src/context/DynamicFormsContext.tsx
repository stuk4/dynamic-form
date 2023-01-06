
import React from 'react'
import { Field } from '../interfaces/IForms'

import { useDynamicContext } from '../hooks/useDynamicContext'

export interface IDynamicFormsContext {
  dynamicForm: Field[]
  savedForms: [Field[]]
  loading: boolean
  objectType: string
  saveForm: (form: Field[]) => void
  updateDynamicForm: (objectType: string) => void
  updateObjectType: (objectType: string) => void

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { dynamicForm, loading, saveForm, savedForms, updateDynamicForm, updateObjectType, objectType } = useDynamicContext()
  return (
    <DynamicFormsContext.Provider
      value={{
        objectType,
        updateObjectType,
        savedForms,
        saveForm,
        dynamicForm,
        updateDynamicForm,
        loading
      }}>
      {children}
    </DynamicFormsContext.Provider>
  )
}
