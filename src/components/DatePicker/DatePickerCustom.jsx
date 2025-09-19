import { useState } from 'react';

function DatePickerCustom({ onChangeDate, showLabel = true, id }) {

    const [date, setDate] = useState('');

    // Obtener fecha actual en formato YYYY-MM-DD usando zona horaria de Colombia
    const today = new Date().toLocaleDateString('en-CA', { timeZone: 'America/Bogota' });

    const handlerOnChangedate = (event) => {
        const dateSelet = event.target.value;
        console.log('date ' + dateSelet);
        setDate(dateSelet);
        onChangeDate(dateSelet);
    }

    return (
        <div className="d-flex flex-column">
            <input
                type="date"
                id={id}
                name={id}
                className="form-control"
                max={today}
                onChange={handlerOnChangedate}
            />
            {showLabel && <label htmlFor={id} className="small text-muted">Fecha de gasto {date}</label>}
        </div>
    );
}

export default DatePickerCustom;