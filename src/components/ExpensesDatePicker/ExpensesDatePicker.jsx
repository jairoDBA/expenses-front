import { useExpenseContext } from "../../Context/ExpenseContext.jsx";
import DatePickerCustom from "../DatePicker/DatePickerCustom";

function ExpensesDatePicker() {

  const { fetchExpenses } = useExpenseContext();

  return (
    <div>
      <div><DatePickerCustom /></div>
      <div><DatePickerCustom /></div>
      <button type="button" onClick={fetchExpenses}>Buscar</button>
    </div>
  );
}

export default ExpensesDatePicker;