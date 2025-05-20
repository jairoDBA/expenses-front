import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseTable from './components/ExpenseTable/ExpenseTable.jsx'
import CategoryInput from './components/CategoryInput/CategoryInput.jsx'
import ExpenseInput from './components/ExpenseInput/ExpenseInput.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='container'>
      <CategoryInput />
      <ExpenseInput />
      <ExpenseTable />
    </div>
    </>
  )
}

export default App
