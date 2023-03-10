import React, { useContext } from 'react'
import { Box, Button } from '@mui/material'
import { Form, Formik } from 'formik'
import { DynamicFormsContext, IDynamicFormsContext } from '../../../context/DynamicFormsContext'
import { useDynamicFields } from '../../../hooks/useDynamicFields'
import { DynamicFields } from '../../../components/fields/DynamicFields'
import { GenerateSekeletonFields } from '../../../components/fields/GenerateSekeletonField'
import { Field } from '../../../interfaces/IForms'

export const DynamicForm: React.FC = (): JSX.Element => {
  const { dynamicForm, loading, saveForm } = useContext(DynamicFormsContext) as IDynamicFormsContext

  const { validationSchema, initialValues } = useDynamicFields({
    fields: dynamicForm
  })

  const handleSubmit = (value: Record<string, any>): void => {
    const savedFields = [...dynamicForm].map((field: Record<string, any>, i) => {
      field.value = value[Object.keys(value)[i]]
      return field
    })
    // Lo casteo ya que estoy seguro que siempre serán de tipo Field
    // Primero es unkown debido a que son formularios "aleatorios"
    saveForm(savedFields as unknown as Field[])
  }

  return (
    <>
    { dynamicForm.length !== 0 && !loading
      ? <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}

      >

          {
              (formik) => (
                <Form noValidate>
                  <Box
                    component="div"
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      flexWrap: 'wrap',
                      margin: 'auto',
                      '& .MuiTextField-root': { m: 1, width: '55%' },
                      '& .MuiFormControl-root': { m: 1, width: '55%' },
                      '& .MuiButton-root': { m: 1, width: '55%' }
                    }}

                  >

                    <DynamicFields preview={false} fields={dynamicForm} />
                    <Button disabled={loading || !formik.isValid} color='secondary' size='large' variant="contained" type='submit'>Enviar</Button>

                  </Box>
                </Form>
              )
            }
      </Formik>
      : <Box
          component="div"
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            margin: 'auto',
            '& .MuiSkeleton-root': { m: 1, width: '55%' }
          }}

        >

            <GenerateSekeletonFields rows={4} />
        </Box>
    }
    </>
  )
}
