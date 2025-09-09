import CategorySelect from "../CategorySelect/CategorySelect";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { useExpenseContext } from "../../Context/ExpenseContext";
import { useState } from "react";

function ExpenseRegister() {

    const { fetchSaveExpenses } = useExpenseContext();

    const [executeExpenseDate, setExecuteExpenseDate] = useState('');
    const [category, setCategory] = useState({});
    const [amount, setAmount] = useState(0);
    const [fixedExpense, setFixedExpense] = useState(false);
    const [isDivisible, setIsDivisible] = useState(false);
    const [notes, setNotes] = useState('');
    const [errors, setErrors] = useState({});

    console.log('executeExpenseDate: ' + executeExpenseDate);
    console.log("category: " + category);
    console.log("amount: " + amount);
    console.log("fixedExpense: " + fixedExpense);
    console.log("isDivisible: " + isDivisible);
    console.log("notes: " + notes);

    const handleSave = () => {
        const newErrors = {};

        // Validación: Fecha
        if (!executeExpenseDate) {
            newErrors.date = "La fecha del gasto es obligatoria.";
        }

        // Validación: Categoría
        if (!category.id) {
            newErrors.category = "Debe seleccionar una categoría válida.";
        }

        // Validación: Monto
        if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
            newErrors.amount = "Debe ingresar un monto válido mayor a 0.";
        }

        // Si hay errores, se setean y no se envía
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // Limpiar errores
        setErrors({});

        // Ejecutar el guardado
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
        <>
            <div className="row g-2">
                <Input label={"Fecha del gasto"}>
                <DatePickerCustom onChangeDate={setExecuteExpenseDate} />
                 {errors.date && <small className="text-danger">{errors.date}</small>}
                </Input>
                <Input label={"Categoria"}>
                <CategorySelect onChangeCategory={setCategory} />
                {errors.category && <small className="text-danger">{errors.category}</small>}
                </Input>
                <Input setValue={setAmount} label={"Monto"} />
                {errors.amount && <small className="text-danger ms-3">{errors.amount}</small>}

                <Checkbox label={"Gasto fijo"} setIsChecked={setFixedExpense} />
                <Checkbox label={"Gasto divisible"} setIsChecked={setIsDivisible} />
                <Input setValue={setNotes} label={"Notas"} />

                <button className="btn btn-outline-secondary" type="button" onClick={handleSave}>Guardar</button>
            </div >
        </>
    );
}

export default ExpenseRegister;