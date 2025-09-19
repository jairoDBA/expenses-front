import CategorySelect from "../CategorySelect/CategorySelect";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { useExpenseContext } from "../../Context/ExpenseContext";
import { useState } from "react";

export default function ExpenseRegister() {
  const { fetchSaveExpenses } = useExpenseContext();

  const [executeExpenseDate, setExecuteExpenseDate] = useState("");
  const [category, setCategory] = useState({});
  const [amount, setAmount] = useState(0);
  const [fixedExpense, setFixedExpense] = useState(false);
  const [isDivisible, setIsDivisible] = useState(false);
  const [notes, setNotes] = useState("");
  const [errors, setErrors] = useState({});

  const handleSave = () => {
    const newErrors = {};

    if (!executeExpenseDate) newErrors.date = "La fecha del gasto es obligatoria.";
    if (!category.id) newErrors.category = "Debe seleccionar una categoría válida.";
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0)
      newErrors.amount = "Debe ingresar un monto válido mayor a 0.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    fetchSaveExpenses(
      executeExpenseDate,
      category,
      parseFloat(amount),
      fixedExpense,
      isDivisible,
      notes.trim()
    );
  };

  return (
    <tr>
      <td>—</td>
      <td>
        <DatePickerCustom onChangeDate={setExecuteExpenseDate} />
        {errors.date && <small className="text-danger d-block">{errors.date}</small>}
      </td>
      <td>
        <CategorySelect onChangeCategory={setCategory} />
        {errors.category && <small className="text-danger d-block">{errors.category}</small>}
      </td>
      <td>
        <Input setValue={setAmount} />
        {errors.amount && <small className="text-danger d-block">{errors.amount}</small>}
      </td>
      <td>
        <Checkbox setIsChecked={setFixedExpense} />
      </td>
      <td>
        <Checkbox setIsChecked={setIsDivisible} />
      </td>
      <td>
        <Input setValue={setNotes} />
      </td>
      <td>
        <button className="btn btn-sm btn-outline-secondary" type="button" onClick={handleSave}>
          Guardar
        </button>
      </td>
    </tr>
  );
}
