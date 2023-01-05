import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { DynamicFormsContext, IDynamicFormsContext } from '../../../context/DynamicFormsContext'

export const SelectObjectType: React.FC = (): JSX.Element => {
  const { updateObjectType } = useContext(DynamicFormsContext) as IDynamicFormsContext
  const [objectType, setObjectType] = useState<string>('1')

  useEffect(() => {
    updateObjectType(objectType)
  }, [])

  const handleChangeObjectType = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setObjectType(event.target.value)
    updateObjectType(event.target.value)
  }

  return (
    <FormControl>
    <FormLabel id="objects">Objeto de configuración</FormLabel>
    <RadioGroup
      row
      aria-labelledby="objects"
      name="objets"
      value={objectType}
      onChange={handleChangeObjectType}
    >
      <FormControlLabel value="1" control={<Radio />} label="Objeto 1" />
      <FormControlLabel value="2" control={<Radio />} label="Objeto 2" />
      <FormControlLabel value="3" control={<Radio />} label="Objeto 3" />
      <FormControlLabel value="4" control={<Radio />} label="Objeto 4" />
    </RadioGroup>
  </FormControl>
  )
}
