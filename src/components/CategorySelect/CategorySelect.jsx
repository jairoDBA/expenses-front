import './CategorySelect.css'
import { useEffect } from 'react'
import { useCategoryContext } from '../../Context/CategoryContext'


function CategorySelect() {

    const { categories, fetchCategories } = useCategoryContext()
   
    useEffect(() => {
        fetchCategories()
    }, []);
    
    return (
        <>
            <select className="form-select" aria-label="Default select example" defaultValue="Selecciona una categoria">
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.category}</option>
                ))}
            </select>
        </>
    )
}

export default CategorySelect
