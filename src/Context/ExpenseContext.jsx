import { createContext, useContext, useState } from 'react'

const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {
    
   const [expenses, setExpenses] = useState([
        { id: 1, executeExpenseDate: '2007-12-03', amount: 2500, fixedExpense: true, resource: 'NOTA', isDivisible: false, category: { id: 1, category: 'AGUA' } },
        { id: 2, executeExpenseDate: '2007-12-04', amount: 3000, fixedExpense: true, resource: 'NOTA', isDivisible: true, category: { id: 1, category: 'Restaurante' } }
    ]);

  const fetchExpenses = async () => {
    try {
      const response = await fetch('http://localhost:8080/expense?initDate=2025-01-01&endDate=2025-12-31')
      const data = await response.json()
      setExpenses(data)
    } catch (error) {
      console.error('Error fetching expenses:', error)
    }
  }

  return (
    <ExpenseContext.Provider value={{ expenses, fetchExpenses }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export const useExpenseContext = () => useContext(ExpenseContext)
