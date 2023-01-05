
import { Container, Paper } from '@mui/material'
import React from 'react'
import { DynamicForm } from './components/DynamicForm'

import { SelectObjectType } from './components/SelectObjectType'

export const FormsView: React.FC = (): JSX.Element => {
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
                <DynamicForm />

             </>
            </Paper>
        </Container>
  )
}
