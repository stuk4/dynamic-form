
import React, { useEffect, useState } from 'react'
import { Field } from '../interfaces/IForms'
import object1 from '../data-example/object-1.json'
import object2 from '../data-example/object-2.json'
import object3 from '../data-example/object-3.json'
import object4 from '../data-example/object-4.json'
import Swal from 'sweetalert2'

export interface IDynamicFormsContext {
  dynamicForm: Field[]
  savedForms: [ Field[]]
  loading: boolean
  objectType: string
  saveForm: (form: Field[]) => void
  updateDynamicForm: (objectType: string) => void
  updateObjectType: (objectType: string) => void

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dynamicForm, setDynamicForm] = useState<Field[]>([])
  const [objectType, setObjectType] = useState<string>('1')
  const [loading, setLoading] = useState<boolean>(true)

  const [savedForms, setSavedForms] = useState<[Field[]]>([[]])

  const selectObjectType = (objectType: number): any => {
    if (objectType === 1) {
      return object1.form
    }
    if (objectType === 2) {
      return object2.form
    }
    if (objectType === 3) {
      return object3.form
    }
    if (objectType === 4) {
      return object4.form
    }
  }

  const updateObjectType = (objType: string): void => {
    setObjectType(objType)
  }

  const updateDynamicForm = (objType: string): void => {
    setLoading(true)
    void new Promise<void>(resolve => {
      setTimeout(resolve, 1000)
    })
      .then(() => {
        const data = JSON.parse(JSON.stringify(selectObjectType(parseInt(objType)))) as unknown as Field[]

        setDynamicForm([...data])
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
    Swal.fire({ title: 'Formulario enviado', icon: 'success' }).then(() => {}).finally(() => {})
  }
  const getSavedForms = (): void => {
    const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[]')

    setSavedForms(currentArray)
  }
  useEffect(() => {
    getSavedForms()
  }, [])

  useEffect(() => {
    updateDynamicForm(objectType)
  }, [])
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
