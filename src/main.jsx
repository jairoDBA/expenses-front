import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExpenseProvider } from './components/Context/ExpenseContext.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseProvider>
    <App />
    </ExpenseProvider>
  </StrictMode>,
)
