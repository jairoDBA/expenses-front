import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ExpenseProvider } from './Context/ExpenseContext.jsx'
import { CategoryProvider } from './Context/CategoryContext.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExpenseProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </ExpenseProvider>
  </StrictMode>,
)
