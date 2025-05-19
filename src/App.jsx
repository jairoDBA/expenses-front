import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseTable from './components/ExpenseTable.jsx'
import CategoryInput from './components/CategoryInput.jsx'
import ExpenseInput from './components/ExpenseInput.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CategoryInput />
      <ExpenseInput />
      <div style={{ maxWidth: '80%' }}>
        <ExpenseTable />
      </div>
    </>
  )
}

export default App
