import React, { useState } from 'react'
import { dataExample } from '../data-example'
import { Field } from '../interfaces/IForms'

export interface IDynamicFormsState {
  formData: Field[]
}
export interface IDynamicFormsContext {
  dynamicForm: IDynamicFormsState
  updateObjectType: (objectType: string) => void

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dynamicForm, setDynamicForm] = useState<IDynamicFormsState>({
    formData: []
  })

  const updateObjectType = (objectType: string): void => {
    const data = dataExample[parseInt(objectType) - 1].form as Field[]
    setDynamicForm({ ...dynamicForm, formData: [] })
    setDynamicForm({ ...dynamicForm, formData: data })
  }

  return (
    <DynamicFormsContext.Provider value={{ dynamicForm, updateObjectType }}>
        {children}
    </DynamicFormsContext.Provider>
  )
}
