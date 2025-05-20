import CategorySelect from "../CategorySelect/CategorySelect";

function ExpenseInput() {
    return (
        <>
            <div class="row g-2">
                <div class="col-md">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGrid"></input>
                        <label for="floatingInputGrid">Fecha</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <CategorySelect />
                        <label for="floatingSelectGrid">Categoria</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGrid"></input>
                        <label for="floatingInputGrid">Monto</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        <label for="floatingSelectGrid">Gasto fijo</label>
                    </div>
                </div>
                 <div class="col-md">
                    <div class="form-floating">
                        <select class="form-select" id="floatingSelectGrid">
                            <option value="true">Si</option>
                            <option value="false">No</option>
                        </select>
                        <label for="floatingSelectGrid">Gasto divisible</label>
                    </div>
                </div>
                <div class="col-md">
                    <div class="form-floating">
                        <input type="text" class="form-control" id="floatingInputGrid"></input>
                        <label for="floatingInputGrid">Notas</label>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExpenseInput;