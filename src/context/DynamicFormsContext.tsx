import React, { useEffect, useState } from 'react'
import { dataExample } from '../data-example'
import { Field } from '../interfaces/IForms'

export interface IDynamicFormsContext {
  dynamicForm: Field[]
  savedForms: [ Field[]]
  loading: boolean
  saveForm: (form: Field[]) => void
  updateObjectType: (objectType: string) => void

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dynamicForm, setDynamicForm] = useState<Field[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [savedForms, setSavedForms] = useState<[Field[]]>([[]])
  const updateObjectType = (objectType: string): void => {
    setLoading(true)
    void new Promise<void>(resolve => {
      setTimeout(resolve, 1000)
    })
      .then(() => {
        const data = dataExample[parseInt(objectType) - 1].form as Field[]
        setDynamicForm([])
        setDynamicForm(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }
  const saveForm = (form: Field[]): void => {
    if (localStorage.getItem('savedForms') === null)localStorage.setItem('savedForms', '[]')
    const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[[]]')
    currentArray.push(form)
    localStorage.setItem('savedForms', JSON.stringify(currentArray))
    setSavedForms(currentArray)
  }
  const getSavedForms = (): void => {
    const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[]')
    console.log(currentArray)
    setSavedForms(currentArray)
  }
  useEffect(() => {
    getSavedForms()
  }, [])

  return (
    <DynamicFormsContext.Provider value={{ savedForms, saveForm, dynamicForm, updateObjectType, loading }}>
        {children}
    </DynamicFormsContext.Provider>
  )
}
