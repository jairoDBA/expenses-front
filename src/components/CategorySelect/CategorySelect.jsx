import './CategorySelect.css'
import useGetCategories from '../../hooks/category/useCategories'
import { use, useEffect } from 'react'

function CategorySelect() {

    const { categories, fetchCategories } = useGetCategories()
   
    useEffect(() => {
        fetchCategories
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
