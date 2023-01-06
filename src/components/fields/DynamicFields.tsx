
import { TextField } from '@mui/material'
import React from 'react'
import { MyTextField } from './MyTextField'
import { MyDateField } from './MyDateField'
import { Field, FieldType } from '../../interfaces/IForms'
import { MySelectField } from './MySelectField'
import { MyTextFieldMultiline } from './MyTextFieldMultiline'
import { MyFileCsvField } from './MyFileCsvField'
interface Props {
  fields: Field[]
  preview?: boolean
  smallForm?: boolean

}

export const DynamicFields: React.FC<Props> = ({ fields, preview = false }: Props): JSX.Element | null => {
  if (fields.length !== 0) {
    return (
                <>
                    {
                        fields.map(({ type, name, label, options }, index) => {
                          if (type === FieldType.INPUT) {
                            return (
                                        <MyTextField
                                            disabled={preview}
                                            type={(type as any)}
                                            name={ name }
                                            label={ label }
                                            key={name}
                                            />
                            )
                          } else if (type === FieldType.DATE_PICKER) {
                            return (
                                        <MyDateField
                                            disabled={preview}
                                            name={ name }
                                            label={ label }
                                            key={name}
                                            />
                            )
                          } else if (type === FieldType.SELECT) {
                            return (

                                    <MySelectField
                                        disabled={preview}
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                        options={options ?? []}

                                    />

                            )
                          } else if (type === FieldType.TEXT_AREA) {
                            return (

                                  <MyTextFieldMultiline
                                      disabled={preview}
                                      key={ name }
                                      label={ label }
                                      name={ name }
                                      options={options}

                                  />

                            )
                          } else if (type === FieldType.FILE) {
                            return (

                                    <MyFileCsvField
                                        disabled={preview}
                                        preview={preview}
                                        key={ name }
                                        label={ label }
                                        name={ name }
                                        options={options}

                                    />

                            )
                          } else {
                            return (

                                    <TextField size="small" fullWidth label={'Tipo  No soportado'} disabled key={name} />

                            )
                          }
                        })
                    }
                </>

    )
  } else {
    return null
  }
}
