import { Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import { Field } from '../../../interfaces/IForms'
interface MyCardProps {
  form: Field[]
  title: string
  showDetail: (fields: { detail: Field[], title: string }) => void
}
export const MyCardForm = ({ form, title, showDetail }: MyCardProps): JSX.Element => {
  return (
    <Grid item xs={12} sm={2} md={2} >
        <Card sx={{ minWidth: 200, minHeight: 176 }}>
        <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>

            </Typography>
            <Typography variant="h5" component="div">
              {title}
            </Typography>

            <Typography sx={{ mt: 1.5 }} variant="body2">
            {form.map(field => field.name).join(', ')}

            </Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => { showDetail({ detail: form, title }) }} size="small">Detalle</Button>
        </CardActions>
        </Card>
    </Grid>
  )
}
