import './ExpenseTable.css'
import { useExpenseContext } from '../Context/ExpenseContext.jsx'

function ExpenseTable() {

  const {expenses}= useExpenseContext();

  return (
    <>
      <div className="table-responsive">
        <table className="table align-middle table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Categoria</th>
              <th scope="col">Monto</th>
              <th scope="col">Gasto Fijo</th>
              <th scope="col">Gasto Divisible</th>
              <th scope="col">Nota</th>
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense.id}>
                <th scope="row" key={expense.id} value={expense.id}>{expense.id}</th>
                <td value={expense.id}>{expense.executeExpenseDate}</td>
                <td value={expense.id}>{expense.category.category}</td>
                <td value={expense.id}>{expense.amount}</td>
                <td value={expense.id}>{expense.fixedExpense ? 'Si' : 'No'}</td>
                <td value={expense.id}>{expense.isDivisible ? 'Si' : 'No'}</td>
                <td value={expense.id}>{expense.resource}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default ExpenseTable
