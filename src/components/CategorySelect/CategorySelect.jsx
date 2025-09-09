import './CategorySelect.css'
import { useEffect } from 'react'
import { useCategoryContext } from '../../Context/CategoryContext'

function CategorySelect({ onChangeCategory }) {
  const { categories, fetchCategories } = useCategoryContext()

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleCategoryChange = (event) => {
    const selectedCategory = JSON.parse(event.target.value)
    console.log('Selected category:', selectedCategory.id)
    console.log('Selected category:', selectedCategory.category)
    onChangeCategory(selectedCategory)
  }

  return (
    <>
      <select
        className="form-select"
        aria-label="Default select example"
        defaultValue=""
        onChange={handleCategoryChange}
      >
        {/* Opción por defecto en blanco */}
        <option value="" disabled>
          Selecciona una categoría
        </option>

        {categories.map((category) => (
          <option key={category.id} value={JSON.stringify(category)}>
            {category.category}
          </option>
        ))}
      </select>
    </>
  )
}

export default CategorySelect
