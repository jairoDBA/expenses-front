import CategorySelect from "../CategorySelect/CategorySelect";
import DatePickerCustom from "../DatePicker/DatePickerCustom";
import { useExpenseContext } from "../../Context/ExpenseContext";
import { useState } from "react";

function ExpenseInput() {

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

    
    const handlerOnChangeAmount = (event) => {
        const inputAmount = event.target.value;
        setAmount(inputAmount);
    }

    const handlerOnChangeFixedExpense = (event) => {
        const isFixedExpense = event.target.value;
        setFixedExpense(isFixedExpense);
    }

    const handlerOnChangeIsDivisible = (event) => {
        const isDivisibleExpense = event.target.value;
        setIsDivisible(isDivisibleExpense);
    }

    const handlerOnChangeNotes = (event) => {
        const inputNotes = event.target.value;
        setNotes(inputNotes);
    }

    return (
        <>
            <div className="row g-2">
                <div className="col-12">
                    <div className="form-floating">
                        <DatePickerCustom onChangeDate={setExecuteExpenseDate} />
                        <label htmlFor="floatingInputGrid">Fecha</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <CategorySelect onChangeCategory={setCategoryId} />
                        <label htmlFor="floatingSelectGrid">Categoria</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" onChange={handlerOnChangeAmount}></input>
                        <label htmlFor="floatingInputGrid">Monto</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" onChange={handlerOnChangeFixedExpense}>
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Gasto fijo</label>
                    </div>
                </div>
                 <div className="col-12">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid" onChange={handlerOnChangeIsDivisible}>
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Gasto divisible</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid" onChange={handlerOnChangeNotes}></input>
                        <label htmlFor="floatingInputGrid">Notas</label>
                    </div>
                </div>
                <button type="button" onClick={() => fetchSaveExpenses(executeExpenseDate, category, amount, fixedExpense, isDivisible, notes)}>Guardar</button>
            </div>
        </>
    );
}

export default ExpenseInput;