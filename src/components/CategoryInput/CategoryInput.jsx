import './CategoryInput.css';
import { useCategoryContext } from '../../Context/CategoryContext';
import { useState } from 'react';

function CategoryInput() {

    const { saveCategory } = useCategoryContext();

    const [category, setCategory] = useState('');
    const [error, setError] = useState('');

    const handlerCategorychange = (event) => {
        const category = event.target.value;
        console.log("Category value changed:", category);
        setCategory(category);
        setError(''); // Limpiar errores al cambiar el input
    }

    
    const handleSave = () => {
        const trimmedCategory = category.trim();

        // Validación: campo vacío o solo espacios
        if (trimmedCategory === '') {
            setError('La categoría no puede estar vacía.');
            return;
        }

        // Validación: no permitir valores numéricos puros o inválidos (opcional)
        if (/^\d+$/.test(trimmedCategory)) {
            setError('La categoría no puede ser solo números.');
            return;
        }

        setError('');
        saveCategory(trimmedCategory); // Guardar sin espacios extra
        setCategory(''); // Limpiar campo tras guardar
    }

    return (
        <>
            <div className="input-group flex-nowrap">
                <span className="input-group-text" id="addon-wrapping">Categoria</span>
                <input 
                    type="text" 
                    className={`form-control ${error ? 'is-invalid' : ''}`} 
                    placeholder="Ingresa el nombre de la Categoria" 
                    aria-label="Categoria"
                    aria-describedby="addon-wrapping" 
                    onChange={handlerCategorychange} 
                />
                <button className="btn btn-outline-secondary" type="button" onClick={handleSave}>Guardar</button>
            </div>

            {error && <div className="invalid-feedback d-block">{error}</div>}
        </>
    );
}

export default CategoryInput;