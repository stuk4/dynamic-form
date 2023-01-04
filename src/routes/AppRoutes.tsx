import { Button } from '@mui/material';
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardView from '../views/dashboard/DashboardView';


export const MyTest = () => {
    // const { checkingAuth } = useAuthStore()
    return (
      <div>
      Test
      <Button type='button'  variant='outlined'>
          Probando
      </Button>
  
  </div>
    )
  }
export const AppRoutes = () => {
  return (
    <Routes>
       
        <Route  path="/" element={<DashboardView  />}>

            <Route  path="/"  element={<MyTest />} />
        </Route>
     
        
                


    </Routes>
  )
}
