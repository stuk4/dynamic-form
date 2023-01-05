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
export const MyFileCsvField: React.FC<Props> = ({ label, handleOnBlur, handleOnChange, size = 'small', ...props }: Props): JSX.Element => {
  const [fields, metaProps, helpers] = useField(props)
  const { setValue } = helpers
  const { error, touched } = metaProps
  const { value } = { ...fields }

  return (
    <>
      <TextField
        fullWidth
        InputLabelProps={{ shrink: true }}
        variant="standard"
        type="file"
        inputProps={{
          accept: ''
        }}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files?.[0]

          if (file == null) {
            setValue('')
            return
          }
          const fileReader = new FileReader()
          fileReader.onload = (e) => {
            console.log('Salto')

            setValue((e.target?.result as string).split(',')[1])
          }

          fileReader.readAsDataURL(file)
        }}
        error={Boolean(error) && touched}
        helperText={Boolean(error) && touched && error}

        size={size}
        label={label}
        autoComplete="nope"
      />
      <TextField
        fullWidth
        variant='filled'
        value={value}
        {...props}
        sx={{
          display: 'none'
        }}
        size={size}
        label={label}
        autoComplete="nope"
        error={Boolean(error) && touched}
        helperText={Boolean(error) && touched && error}
      />
    </>

  )
}
