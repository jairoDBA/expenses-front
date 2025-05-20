import { useEffect, useState } from 'react'
import './CategorySelect.css'

function CategorySelect() {

useEffect(() => {
    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/category');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    fetchCategories();
}, []);

const [categories, setCategories] = useState([
        { id: 1, name: 'Restaurantes' },
        { id: 2, name: 'Mercado' },
        { id: 3, name: 'Servicios Publicos' }
    ]);

    return (
        <>
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecciona Categoria</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.category}</option>
                ))}
            </select>
        </>
    )
}

export default CategorySelect
