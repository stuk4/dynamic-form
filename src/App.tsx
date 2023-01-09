
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AppRoutes } from './routes/AppRoutes'
import { DynamicFormsProvider } from './context/DynamicFormsContext'
const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <DynamicFormsProvider>
            <AppRoutes />
      </DynamicFormsProvider>
    </BrowserRouter>
  )
}

export default App
