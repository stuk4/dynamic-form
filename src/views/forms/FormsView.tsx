import { Container, Paper } from '@mui/material'
import React, { useContext } from 'react'
import { DynamicFormsContext, IDynamicFormsContext } from '../../context/DynamicFormsContext'
import { SelectObjectType } from './components/SelectObjectType'

export const FormsView: React.FC = (): JSX.Element => {
  const { dynamicForm } = useContext(DynamicFormsContext) as IDynamicFormsContext

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
                <SelectObjectType />

              {dynamicForm.objectType}
            </Paper>
        </Container>
  )
}
