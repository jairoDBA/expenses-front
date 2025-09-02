import { createContext, useContext, useState } from 'react'

const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {

  const [expenses, setExpenses] = useState([]);

  const fetchExpenses = async (initDate, endDate) => {
    try {
      const response = await fetch(`http://localhost:8080/expense?initDate=${initDate}&endDate=${endDate}`)
      const data = await response.json()
      setExpenses(data)
    } catch (error) {
      console.error('Error fetching expenses:', error)
    }
  }

  const fetchSaveExpenses = async (executeExpenseDate, category, amount, fixedExpense, isDivisible, notes) => {
    const body = JSON.stringify({
          executeExpenseDate,
          amount,
          fixedExpense,
          resource: notes,
          isDivisible,
          category: JSON.parse(category)
        })
    try {
      const response = await fetch('http://localhost:8080/expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: body
      });
      console.log('body:', body);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      console.log('Expense saved successfully:', data);
    } catch (error) {
      console.error('Error fetching expense save:', error);
    }
  };

  return (
    <ExpenseContext.Provider value={{ expenses, fetchExpenses, fetchSaveExpenses }}>
      {children}
    </ExpenseContext.Provider>
  )
}

export function useExpenseContext() {
  return useContext(ExpenseContext)
}
