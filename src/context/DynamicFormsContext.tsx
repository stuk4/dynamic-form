import { FormikHelpers } from 'formik'
import React, { useEffect, useState } from 'react'
import { dataExample } from '../data-example'
import { Field } from '../interfaces/IForms'
import object1 from '../data-example/object-1.json'
import object2 from '../data-example/object-2.json'
import object3 from '../data-example/object-3.json'
import object4 from '../data-example/object-4.json'
export interface IDynamicFormsContext {
  dynamicForm: Field[]
  savedForms: [ Field[]]
  loading: boolean
  saveForm: (form: Field[], formik: FormikHelpers<Record<string, any>>) => void
  updateObjectType: (objectType: string) => void

}
export const DynamicFormsContext = React.createContext<IDynamicFormsContext | null>(null)

export const DynamicFormsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [dynamicForm, setDynamicForm] = useState<Field[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  const [savedForms, setSavedForms] = useState<[Field[]]>([[]])

  const selectObjectType = (objectType: number): any => {
    console.log(objectType)
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

  const updateObjectType = (objectType: string): void => {
    setLoading(true)
    void new Promise<void>(resolve => {
      setTimeout(resolve, 1000)
    })
      .then(() => {
        const data = JSON.parse(JSON.stringify(selectObjectType(parseInt(objectType)))) as unknown as Field[]
        // const data = JSON.parse(JSON.stringify(dataExample[parseInt(objectType) - 1].form)) as Field[]
        // const data = Array.from(Object.assign({}, dataExample[parseInt(objectType) - 1].form)) as Field[]
        console.log('data', data)
        setDynamicForm([])
        setDynamicForm(data)
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const saveForm = (form: Field[], formik: FormikHelpers<Record<string, any>>): void => {
    setLoading(true)
    void new Promise<void>(resolve => {
      setTimeout(resolve, 1000)
    })
      .then(() => {
        if (localStorage.getItem('savedForms') === null)localStorage.setItem('savedForms', '[]')
        const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[[]]')
        currentArray.push(form)
        localStorage.setItem('savedForms', JSON.stringify(currentArray))
        setSavedForms(currentArray)
      })
      .finally(() => {
        setLoading(false)
        console.log('aaaa')
        formik.resetForm()
      })
  }
  const getSavedForms = (): void => {
    const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[]')

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
