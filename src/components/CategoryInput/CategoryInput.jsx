import './CategoryInput.css';


function CategoryInput() {
    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <input type="text" className="form-control" placeholder="Ingresa el nombre de la Categoria" aria-label="Username" aria-describedby="addon-wrapping"></input>
            </div>
        </>
    );
}

export default CategoryInput;