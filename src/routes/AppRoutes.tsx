import { Route, Routes } from 'react-router-dom'
import LayoutView from '../views/layout/LayoutView'
import { FormsView } from '../views/forms/FormsView'
import { DashboardView } from '../views/dashboard/DashboardView'
import React from 'react'

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/dynamic-form" element={<LayoutView />}>
            <Route path="/dynamic-form/" element={<FormsView />} />
            <Route path="/dynamic-form/dashboard" element={<DashboardView />} />
        </Route>
    </Routes>
  )
}
