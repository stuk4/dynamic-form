import { useField } from 'formik'
import { TextField } from '@mui/material'
import React from 'react'
interface Props {
  label: string
  name: string
  type?: 'text' | 'email' | 'password'
  placeholder?: string
  [x: string]: any

}
export const MyTextFieldMultiline: React.FC<Props> = ({ label, ...props }: Props): JSX.Element => {
  const [field, metaProps] = useField(props)
  const { error, touched } = metaProps
  return (
        <TextField
            label={label}
            multiline
            fullWidth
            size="medium"
            autoComplete="nope"
            variant="outlined"
            minRows={3}
            maxRows={6}
            {...field}
            {...props}
            error={Boolean(error) && touched}
            helperText={Boolean(error) && touched && error}
        />
  )
}
