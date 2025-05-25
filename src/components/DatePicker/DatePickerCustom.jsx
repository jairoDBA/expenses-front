import { useState } from 'react';

function DatePickerCustom() {

const [date, setDate] = useState('');

const handlerOnChangedate = (event) => {
    const dateSelet = event.target.value 
    console.log('date ' + dateSelet);
    setDate(dateSelet);
}

    return (
        <div>
            <input type="date" id="birthday" name="birthday" onChange={handlerOnChangedate}></input>
            <label htmlFor="birthday">Fecha de gasto {date}</label>
        </ div>
    );
}

export default DatePickerCustom;