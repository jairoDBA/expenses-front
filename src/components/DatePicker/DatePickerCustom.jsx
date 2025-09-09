import { useState } from 'react';

function DatePickerCustom({ onChangeDate }) {

const [date, setDate] = useState('');

// Obtener fecha actual en formato YYYY-MM-DD usando zona horaria de Colombia
const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });

const handlerOnChangedate = (event) => {
    const dateSelet = event.target.value 
    console.log('date ' + dateSelet);
    setDate(dateSelet);
    onChangeDate(dateSelet);
}

    return (
        <div>
            <input type="date" id="dateExpense" name="dateExpense" max={today} onChange={handlerOnChangedate}></input>
            <label htmlFor="dateExpense">Fecha de gasto {date}</label>
        </ div>
    );
}

export default DatePickerCustom;