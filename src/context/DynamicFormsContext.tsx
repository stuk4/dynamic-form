import React, { useState } from 'react'
import { dataExample } from '../data-example'
import { Field } from '../interfaces/IForms'

export interface IDynamicFormsContext {
  dynamicForm: Field[]
  loading: boolean
  updateObjectType: (objectType: string) => Promise<void>

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dynamicForm, setDynamicForm] = useState<Field[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const updateObjectType = async (objectType: string): Promise<void> => {
    setLoading(true)
    // Simulo el comportamiento de una petición
    await new Promise<void>(resolve => {
      setTimeout(resolve, 1000)
    }).then(() => {
      const data = dataExample[parseInt(objectType) - 1].form as Field[]
      setDynamicForm([])
      setDynamicForm(data)
      setLoading(false)
    })
  }

  return (
    <DynamicFormsContext.Provider value={{ dynamicForm, updateObjectType, loading }}>
        {children}
    </DynamicFormsContext.Provider>
  )
}
