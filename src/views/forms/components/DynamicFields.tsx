
import { TextField } from '@mui/material'
import React from 'react'
import { MyTextField } from '../../../components/fields/MyTextField'
import { MyDateField } from '../../../components/fields/MyDateField'
import { Field, FieldType } from '../../../interfaces/IForms'
import { MySelectField } from '../../../components/fields/MySelectField'
import { MyTextFieldMultiline } from '../../../components/fields/MyTextFieldMultiline'
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
                                        options={options}

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
                          } else {
                            return (

                                    <TextField size="small" fullWidth label={`Tipo ${type} No soportado`} disabled key={name} />

                            )
                          }

                          // throw new Error(`El type: ${ type }, no es soportado`);
                        })
                    }
                </>

    )
  } else {
    return null
  }
}
