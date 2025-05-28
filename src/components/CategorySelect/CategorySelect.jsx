import './CategorySelect.css'
import { useEffect } from 'react'
import { useCategoryContext } from '../../Context/CategoryContext'


function CategorySelect({ onChangeCategory }) {

    const { categories, fetchCategories } = useCategoryContext()
   
    useEffect(() => {
        fetchCategories()
    }, []);

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        console.log('Selected category:', selectedCategory);
        onChangeCategory(selectedCategory);
    }
    
    return (
        <>
            <select className="form-select" aria-label="Default select example" defaultValue="Selecciona una categoria" onChange={handleCategoryChange}>
                {categories.map((category) => (
                    <option key={category.id} value={JSON.stringify(category)}>{category.category}</option>
                ))}
            </select>
        </>
    )
}

export default CategorySelect
