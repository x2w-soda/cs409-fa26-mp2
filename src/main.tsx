import { createRoot } from 'react-dom/client'
import DataProvider from './Request'
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <DataProvider>
    <App />
  </DataProvider>
)
