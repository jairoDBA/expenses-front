import ExpenseRegister from "../ExpenseRegister/ExpenseRegister";
import ExpensesDatePicker from "../ExpensesDatePicker/ExpensesDatePicker";
import ExpenseTable from "../ExpenseTable/ExpenseTable";

function Expenses() {
  return (
    <>
      <div className="mb-3">
        <ExpensesDatePicker />
      </div>

      <ExpenseTable />
    </>
  );
}

export default Expenses;
