import './ExpenseTable.css'
import CategorySelect from './CategorySelect.jsx'

function ExpenseTable() {

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
          <tr>
            <th scope="row">1</th>
            <td>2025-05-18</td>
            <td><CategorySelect /></td>
            <td>60.000</td>
            <td>false</td>
            <td>true</td>
            <td>Mcdonald</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>2025-05-18</td>
            <td><CategorySelect /></td>
            <td>60.000</td>
            <td>false</td>
            <td>true</td>
            <td>Mcdonald</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>2025-05-18</td>
            <td><CategorySelect /></td>
            <td>60.000</td>
            <td>false</td>
            <td>true</td>
            <td>Mcdonald</td>
          </tr>
        </tbody>
      </table>
      </div>
    </>
  )
}

export default ExpenseTable
