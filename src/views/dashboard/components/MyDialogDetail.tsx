
import { Button } from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import React from 'react'
import { Field } from '../../../interfaces/IForms'
interface Props {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  open: boolean
  detail: { detail: Field[], title: string }
}
export const MyDialogDetail: React.FC<Props> = ({ setOpen, open, detail }: Props): JSX.Element => {
  const handleClose = (): void => {
    setOpen(false)
  }
  return (
    <Dialog open={open} onClose={handleClose}>
    <DialogTitle>{detail.title}</DialogTitle>
    <DialogContent>
      <DialogContentText>
        To subscribe to this website, please enter your email address here. We
        will send updates occasionally.
      </DialogContentText>
   aaaaa
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose}>Cerrar</Button>

    </DialogActions>
  </Dialog>
  )
}
