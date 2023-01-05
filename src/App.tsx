
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { DynamicFormsProvider } from './context/DynamicFormsContext'
const App: React.FC = (): JSX.Element => {
  return (
    <DynamicFormsProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
    </DynamicFormsProvider>
  )
}

export default App
