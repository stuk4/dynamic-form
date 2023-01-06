import { Grid } from '@mui/material'
import React, { useContext, useState } from 'react'
import Box from '@mui/material/Box'

import { DynamicFormsContext, IDynamicFormsContext } from '../../context/DynamicFormsContext'
import { MyCardForm } from './components/MyCardForm'
import { Field } from '../../interfaces/IForms'
import { MyDialogDetail } from './components/MyDialogDetail'

interface Detail {
  detail: Field[]
  title: string
}

export const DashboardView: React.FC = (): JSX.Element => {
  const { savedForms } = useContext(DynamicFormsContext) as IDynamicFormsContext
  const [detail, setDetail] = useState<Detail | null>({
    detail: [],
    title: ''
  })
  const [showModal, setShowModal] = useState<boolean>(false)

  const showDetail = (detail: Detail): void => {
    setDetail(null)
    setDetail(detail)
    setShowModal(true)
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid
          container
          width={'100%'}
          spacing={{ xs: 2, md: 1 }}
          columns={{ xs: 4, sm: 2, md: 6 }}
        >
          {savedForms.map((form: Field[], index) => (
            <MyCardForm
              key={index}
              form={form}
              title={`Formulario ${index + 1}`}
              showDetail={showDetail}
            />
          ))}
        </Grid>
    </Box>
      { showModal && (detail != null) && <MyDialogDetail detail={detail} open={showModal} setOpen={setShowModal} />}
    </>

  )
}
