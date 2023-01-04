import { Route, Routes } from 'react-router-dom'
import LayoutView from '../views/layout/LayoutView';
import { FormsView } from '../views/forms/FormsView';
import { DashboardView } from '../views/dashboard/DashboardView';



export const AppRoutes = () => {
  return (
    <Routes>    
        <Route  path="/" element={<LayoutView  />}>
            <Route  path="/"  element={<FormsView />} />
            <Route  path="/dashboard"  element={<DashboardView />} />
        </Route>
    </Routes>
  )
}
