import { Box, Container, Paper, TextField } from '@mui/material'
import React from 'react'

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
                <SelectObjectType />
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }
                  }}

                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-multiline-flexible"
                    label="Multiline"
                    multiline
                    maxRows={4}
                  />

                </Box>

            </Paper>
        </Container>
  )
}
