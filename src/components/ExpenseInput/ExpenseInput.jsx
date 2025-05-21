import CategorySelect from "../CategorySelect/CategorySelect";

function ExpenseInput() {
    return (
        <>
            <div className="row g-2">
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid"></input>
                        <label htmlFor="floatingInputGrid">Fecha</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <CategorySelect />
                        <label htmlFor="floatingSelectGrid">Categoria</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid"></input>
                        <label htmlFor="floatingInputGrid">Monto</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid">
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Gasto fijo</label>
                    </div>
                </div>
                 <div className="col-12">
                    <div className="form-floating">
                        <select className="form-select" id="floatingSelectGrid">
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        <label htmlFor="floatingSelectGrid">Gasto divisible</label>
                    </div>
                </div>
                <div className="col-12">
                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInputGrid"></input>
                        <label htmlFor="floatingInputGrid">Notas</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExpenseInput;