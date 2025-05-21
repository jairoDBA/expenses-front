import './CategorySelect.css'
import useGetCategories from '../../hooks/category/useCategories'

function CategorySelect() {

const { categories } = useGetCategories()

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
