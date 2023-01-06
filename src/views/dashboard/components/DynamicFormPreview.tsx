import React from 'react'
import { Box } from '@mui/material'
import { Form, Formik } from 'formik'

import { useDynamicFields } from '../../../hooks/useDynamicFields'
import { Field } from '../../../interfaces/IForms'
import { DynamicFields } from '../../../components/fields/DynamicFields'

interface DynamicFormPreviewProps {
  dynamicForm: Field[]
}
export const DynamicFormPreview: React.FC<DynamicFormPreviewProps> = ({ dynamicForm }: DynamicFormPreviewProps): JSX.Element => {
  const { validationSchema, initialValues } = useDynamicFields({
    fields: dynamicForm
  })

  return (
    <>
    { dynamicForm.length !== 0 &&
      <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={() => {}}

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

                    <DynamicFields preview fields={dynamicForm} />

                  </Box>
                </Form>
              )
            }
      </Formik>

    }
    </>
  )
}
