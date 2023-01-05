
import * as Yup from 'yup'

import { Field, ValidationType } from '../interfaces/IForms'

interface Props {
  fields: Field[]
  //   Si se necesita agregar un campo extra
  extraFields?: Record<string, any>
}
interface IUseDynamicFields {
  validationSchema: Record<string, any>
  initialValues: Record<string, any>
}

export const useDynamicFields = ({ fields, extraFields }: Props): IUseDynamicFields => {
  const initialValues: Record<string, any> = {}
  const requiredFields: Record<string, any> = {}

  if (fields.length !== 0) {
    for (const input of fields) {
      initialValues[input.name] = input.value

      if (input.validations.length !== 0) continue
      let schema = Yup.string()

      for (const rule of input.validations) {
        if (rule.type === ValidationType.REQUIRED) {
          schema = schema.required('Este campo es requerido')
        }

        if (rule.type === ValidationType.MAX_LENGTH) {
          schema = schema.max(rule.value ?? 100, `Máximo de ${rule.value ?? 100} caracteres`)
        }

        // ...Agregar  otras reglas si se necesita
      }

      requiredFields[input.name] = schema
    }
  }

  const validationSchema = Yup.object({ ...requiredFields, ...extraFields }) as Record<string, any>
  return { initialValues, validationSchema }
}
