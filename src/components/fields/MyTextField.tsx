import { useField } from 'formik'
import { TextField } from '@mui/material'
import React from 'react'
interface Props {
  label: string | undefined
  name: string
  handleOnBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'date'
  size?: 'small' | 'medium'
  placeholder?: string
  [x: string]: any

}
export const MyTextField: React.FC<Props> = ({ label, handleOnBlur, handleOnChange, size = 'small', ...props }: Props): JSX.Element => {
  const [fields, metaProps] = useField(props)
  const { error, touched } = metaProps
  const { onBlur, onChange, ...field } = { ...fields }
  return (
        <TextField
            fullWidth
            {...field}
            {...props}
            onChange={(e) => {
              onChange(e)
              if (handleOnChange != null) {
                handleOnChange(e)
              }
            }}
            onBlur={(e) => {
              onBlur(e)
              if (handleOnBlur != null) {
                handleOnBlur(e)
              }
            }}
            error={Boolean(error) && touched}
            helperText={Boolean(error) && touched && error}
            size={size}
            label={label}
            autoComplete="nope"
        />
  )
}
