import { useEffect, useState } from 'react'
import { Field } from '../interfaces/IForms'
import object1 from '../data-example/object-1.json'
import object2 from '../data-example/object-2.json'
import object3 from '../data-example/object-3.json'
import object4 from '../data-example/object-4.json'
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom'
import { IDynamicFormsContext } from '../context/DynamicFormsContext'

export const useDynamicContext = (): IDynamicFormsContext => {
  const navigate = useNavigate()
  const [dynamicForm, setDynamicForm] = useState<Field[]>([])
  const [loading, setLoading] = useState<boolean>(false)
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

  const updateDynamicForm = (objType: string): void => {
    setLoading(true)
    void new Promise<void>(resolve => {
      setTimeout(resolve, 500)
    })
      .then(() => {
        // LO parseo doble para evitar la mutacion debido a que son archivos estaticos
        const data = JSON.parse(JSON.stringify(selectObjectType(parseInt(objType)))) as unknown as Field[]

        setDynamicForm([...data])
      })
      .finally(() => {
        setLoading(false)
      })
  }

  const saveForm = (form: Field[]): void => {
    if (localStorage.getItem('savedForms') === null) localStorage.setItem('savedForms', '[]')
    const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[[]]')
    currentArray.push(form)
    localStorage.setItem('savedForms', JSON.stringify(currentArray))
    setSavedForms(currentArray)
    navigate('dynamic-form/dashboard')

    Swal.fire({ title: 'Formulario enviado', icon: 'success' }).then(() => { }).finally(() => { })
  }
  const getSavedForms = (): void => {
    const currentArray: [Field[]] = JSON.parse(localStorage.getItem('savedForms') ?? '[]')
    setSavedForms(currentArray)
  }
  useEffect(() => {
    getSavedForms()
  }, [])

  return {
    saveForm,
    updateDynamicForm,
    dynamicForm,
    savedForms,
    loading
  }
}
