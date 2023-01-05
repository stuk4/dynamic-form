import { useField } from 'formik'
import { FormControl, FormHelperText, InputLabel, Select, SelectChangeEvent } from '@mui/material'
import React from 'react'
import { OptionField } from '../../interfaces/IForms'

interface Props {
  label: string
  name: string
  options?: OptionField[]
  handleOnChange?: (e: SelectChangeEvent<any>) => void
  handleOnBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  [x: string]: any

}
export const MySelectField: React.FC<Props> = ({ label, options, handleOnBlur, handleOnChange, ...props }: Props): JSX.Element => {
  const [fields, metaProps] = useField(props)
  const { error, touched } = metaProps
  const { onBlur, onChange, ...field } = { ...fields }

  return (
        <FormControl size='small' fullWidth variant="outlined" >
            <InputLabel htmlFor={props.name}>{label}</InputLabel>
            <Select
                error={Boolean(error) && touched}
                label={label}
                {...props}
                onBlur={(e) => {
                  onBlur(e)
                  if (handleOnBlur != null) {
                    handleOnBlur(e)
                  }
                }}
                onChange={(e) => {
                  onChange(e)
                  if (handleOnChange != null) {
                    handleOnChange(e)
                  }
                }}
                variant='filled'
                {...field}
                inputProps={{
                  id: props.name
                }}
                />

            {Boolean(error) && touched && <FormHelperText error={Boolean(error) && touched} >{error}</FormHelperText>}
        </FormControl>
  )
}
