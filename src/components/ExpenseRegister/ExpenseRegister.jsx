import CategorySelect from "../CategorySelect/CategorySelect";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import { useExpenseContext } from "../../Context/ExpenseContext";
import { useState } from "react";

function ExpenseRegister() {

    const { fetchSaveExpenses } = useExpenseContext();

    const [executeExpenseDate, setExecuteExpenseDate] = useState('');
    const [category, setCategoryId] = useState({});
    const [amount, setAmount] = useState(0);
    const [fixedExpense, setFixedExpense] = useState(false);
    const [isDivisible, setIsDivisible] = useState(false);
    const [notes, setNotes] = useState('');


    console.log('executeExpenseDate: ' + executeExpenseDate);
    console.log("category: " + category);
    console.log("amount: " + amount);
    console.log("fixedExpense: " + fixedExpense);
    console.log("isDivisible: " + isDivisible);
    console.log("notes: " + notes);

    return (
        <>
            <div className="row g-2">
                <Input label={"Fecha del gasto"}><DatePickerCustom onChangeDate={setExecuteExpenseDate} /></Input>
                <Input label={"Categoria"}><CategorySelect onChangeCategory={setCategoryId} /></Input>
                <Input setValue={setAmount} label={"Monto"} />
                <Checkbox label={"Gasto fijo"} setIsChecked={setFixedExpense} />
                <Checkbox label={"Gasto divisible"} setIsChecked={setIsDivisible} />
                <Input setValue={setNotes} label={"Notas"} />

                <button type="button" onClick={() => fetchSaveExpenses(executeExpenseDate, category, amount, fixedExpense, isDivisible, notes)}>Guardar</button>
            </div >
        </>
    );
}

export default ExpenseRegister;