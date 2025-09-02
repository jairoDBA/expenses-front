import './CategoryInput.css';
import { useCategoryContext } from '../../Context/CategoryContext';
import { useState } from 'react';

function CategoryInput() {

    const { saveCategory } = useCategoryContext();

    const [category, setCategory] = useState('');

    const handlerCategorychange = (event) => {
        const category = event.target.value;
        console.log("Category value changed:", category);
        setCategory(category);
    }

    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <input type="text" className="form-control" placeholder="Ingresa el nombre de la Categoria" aria-label="Username"
                 aria-describedby="addon-wrapping" onChange={handlerCategorychange}></input>
                <button className="btn btn-outline-secondary" type="button" onClick={() => saveCategory(category)}>Guardar</button>
            </div>
        </>
    );
}

export default CategoryInput;