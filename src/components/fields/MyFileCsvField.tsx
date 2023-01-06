import { useField } from 'formik'
import { Button, TextField } from '@mui/material'
import React from 'react'
import { FileDownload } from '@mui/icons-material'
import { base64ToFile } from '../../utils/base64ToFile'
import { downloadFile } from '../../utils/downloadFile'
interface Props {
  label: string | undefined
  name: string
  handleOnBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  handleOnChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  type?: 'text' | 'email' | 'password' | 'search' | 'number' | 'date'
  size?: 'small' | 'medium'
  placeholder?: string
  [x: string]: any
  preview: boolean

}
export const MyFileCsvField: React.FC<Props> = ({ label, handleOnBlur, handleOnChange, preview, size = 'small', ...props }: Props): JSX.Element => {
  const [fields, metaProps, helpers] = useField(props)
  const { setValue } = helpers
  const { error, touched } = metaProps
  const { value } = { ...fields }

  const downloadFileCsv = (): void => {
    if (preview) {
      const file = base64ToFile(value)
      downloadFile(file)
    }
  }

  return (
    <>
      {
        preview

          ? <Button variant="contained" onClick={() => { downloadFileCsv() }} endIcon={<FileDownload />}>
            { base64ToFile(value).name}
          </Button>

          : <>
            <TextField
              fullWidth
              disabled={preview}
              InputLabelProps={{ shrink: true }}
              variant="standard"
              type="file"
              inputProps={{
                accept: '.csv'
              }}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                const file = e.target.files?.[0]

                if (file == null) {
                  setValue('')
                  return
                }
                const fileReader = new FileReader()
                fileReader.onload = (e) => {
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
      }
    </>

  )
}
