import { useExpenseContext } from "../../Context/ExpenseContext.jsx";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import { useState } from 'react';

function ExpensesDatePicker() {

  const { fetchExpenses } = useExpenseContext();

  const [initDate, setInitDate] = useState('2025-01-01');
  const [endDate, setEndDate] = useState('2025-12-31');

  return (
    <div className="row g-2 align-items-end">
      <div className="col-auto">
        <DatePickerCustom id="initDate" onChangeDate={setInitDate} showLabel={false} />
      </div>
      <div className="col-auto">
        <DatePickerCustom id="endDate" onChangeDate={setEndDate} showLabel={false} />
      </div>
      <div className="col-auto">
        <button className="btn btn-primary" type="button" onClick={() => fetchExpenses(initDate, endDate)}>Buscar</button>
      </div>
    </div>
  );
}

export default ExpensesDatePicker;