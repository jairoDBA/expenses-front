import { useState } from 'react';

function DatePickerCustom({ onChangeDate }) {

const [date, setDate] = useState('');

const handlerOnChangedate = (event) => {
    const dateSelet = event.target.value 
    console.log('date ' + dateSelet);
    setDate(dateSelet);
    onChangeDate(dateSelet);
}

    return (
        <div>
            <input type="date" id="dateExpense" name="dateExpense" onChange={handlerOnChangedate}></input>
            <label htmlFor="dateExpense">Fecha de gasto {date}</label>
        </ div>
    );
}

export default DatePickerCustom;