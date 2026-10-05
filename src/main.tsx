import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataProvider from './Request'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <DataProvider>
    <App />
  </DataProvider>
  </StrictMode>,
)
