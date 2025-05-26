import { useExpenseContext } from "../../Context/ExpenseContext.jsx";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import { useState } from 'react';

function ExpensesDatePicker() {

  const { fetchExpenses } = useExpenseContext();

  const [initDate, setInitDate] = useState('2025-01-01');
  const [endDate, setEndDate] = useState('2025-12-31');

  return (
    <div>
      <div><DatePickerCustom onChangeDate={setInitDate} /></div>
      <div><DatePickerCustom onChangeDate={setEndDate} /></div>
      <button type="button" onClick={() => fetchExpenses(initDate, endDate)}>Buscar</button>
    </div>
  );
}

export default ExpensesDatePicker;