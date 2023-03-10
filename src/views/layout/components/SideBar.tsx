import React from 'react'
import { IconButton, Toolbar } from '@mui/material'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import Divider from '@mui/material/Divider'
import { Menu } from './Menu'
import { Drawer } from './Drawer'

interface SideBarProps {
  open: boolean
  toggleDrawer: () => void

}

export const SideBar: React.FC<SideBarProps> = ({ open, toggleDrawer }: SideBarProps): JSX.Element => {
  return (
    <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1]
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
        <Menu />
    </Drawer>
  )
}
