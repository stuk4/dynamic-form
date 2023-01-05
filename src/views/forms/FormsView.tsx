import { Box, Button, Container, Paper } from '@mui/material'
import React, { useContext } from 'react'

import { SelectObjectType } from './components/SelectObjectType'
import { DynamicFormsContext, IDynamicFormsContext } from '../../context/DynamicFormsContext'
import { DynamicFields } from './components/DynamicFields'
import { Form, Formik, FormikProps } from 'formik'
import { useDynamicFields } from '../../hooks/useDynamicFields'
import { GenerateSekeletonFields } from '../../components/fields/GenerateSekeletonField'

export const FormsView: React.FC = (): JSX.Element => {
  const { dynamicForm, loading } = useContext(DynamicFormsContext) as IDynamicFormsContext
  const { validationSchema, initialValues } = useDynamicFields({
    fields: dynamicForm
  })
  return (
        <Container component="main" maxWidth="sm"
            sx={
                { mb: 12 }
        }>
            <Paper
              variant="outlined"
              sx={{
                my: { xs: 6, md: 6 },
                p: { xs: 3, md: 3 }
              }}
              >
                <>

                <SelectObjectType />
                { dynamicForm.length !== 0 && !loading
                  ? <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={(values) => {
                      console.log(values)
                    }}

                >

                    {
                        (formik: FormikProps<Record<string, any>>) => (
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

                              <DynamicFields fields={dynamicForm} />
                              <Button disabled={loading} color='secondary' size='large' variant="contained" type='submit'>Enviar</Button>

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
            </Paper>
        </Container>
  )
}
