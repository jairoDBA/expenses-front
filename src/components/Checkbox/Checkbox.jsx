
function Checkbox({ label, setIsChecked }) {

    const handlerOnChange = (event) => {
        const isChecked = event.target.checked;
        console.log("Checkbox value changed:", isChecked);
        setIsChecked(isChecked);
    }

    return (
        <div className="col-3">
            <div className="form-check d-flex justify-content-between align-items-center">
                <label className="form-check-label" htmlFor="flexCheckDefault">
                    {label}
                </label>
                <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexCheckDefault"
                    onChange={handlerOnChange}
                />
            </div>
        </div>
    )
}

export default Checkbox;