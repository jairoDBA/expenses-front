

function Input({ children, setValue, label }) {

    const handlerOnChange = (event) => {
        const inputValue = event.target.value;
        console.log("Input value changed:", inputValue);
        setValue(inputValue);
    }

    return (
        <div className="col-12">
            <div className="form-floating">
                {children && (<>{children}</>)}
                {!children && <input type="text" className="form-control" id="floatingInputGrid" onChange={handlerOnChange} />}
                <label>{label}</label>
            </div>
        </div>
    )
}

export default Input;