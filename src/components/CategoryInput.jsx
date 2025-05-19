import './CategoryInput.css';


function CategoryInput() {
    return (
        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">Categoria</span>
            <input type="text" class="form-control" placeholder="Ingresa el nombre de la Categoria" aria-label="Username" aria-describedby="addon-wrapping"></input>
        </div>
    );
}

export default CategoryInput;