import { useField } from 'formik'
import { TextField } from '@mui/material'
import React from 'react'
interface Props {
  label: string
  name: string
  placeholder?: string
  [x: string]: any

}
export const MyDateField: React.FC<Props> = ({ label, ...props }: Props): JSX.Element => {
  const [field, metaProps] = useField(props)
  const { error, touched } = metaProps
  return (
        <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...field}
            {...props}
            type="date"
            error={Boolean(error) && touched}
            helperText={Boolean(error) && touched && error}
            size="small"
            label={label}
            autoComplete="nope"
        />
  )
}
