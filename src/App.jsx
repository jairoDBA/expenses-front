import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ExpenseTable from './components/ExpenseTable/ExpenseTable.jsx'
import CategoryInput from './components/CategoryInput/CategoryInput.jsx'
import ExpenseInput from './components/ExpenseInput/ExpenseInput.jsx'
import ExpensesDatePicker from './components/ExpensesDatePicker/ExpensesDatePicker.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container'>
        <div className="container text-center">
          <div className="row align-items-start">
            <div className="col">
              <div className='row'>
              <CategoryInput />
              </div>
              <div className='row'>
                <ExpenseInput />
              </div>
              </div>
            <div className="col">
              <ExpensesDatePicker />
              <ExpenseTable />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
