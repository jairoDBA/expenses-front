import { createContext, useContext, useEffect, useState } from 'react'

const ExpenseContext = createContext()

export const ExpenseProvider = ({ children }) => {

  const [expenses, setExpenses] = useState([]);

  useEffect(() => {
    fetchExpenses('', '')
  }, []);
  

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
        console.log(`response ${JSON.stringify(response)}`)
        throw new Error(`Error: ${response.message}`);
      }

      const data = await response.json();
      console.log('Expense saved successfully:', data);
      alert('Gasto guardado exitosamente');
    } catch (error) {
      console.error('Error fetching expense save:', error);
      alert(`No se pudo guardar el gasto ${error.message}`);
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
