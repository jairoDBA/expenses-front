import './CategorySelect.css'
import { useEffect, useState } from 'react'
import { useCategoryContext } from '../../Context/CategoryContext'

function CategorySelect({ onChangeCategory }) {
  const { categories, fetchCategories } = useCategoryContext()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    fetchCategories()
  }, [])

  const handleInputChange = (event) => {
    const val = event.target.value
    setInputValue(val)

    // Try to find an exact match (case-insensitive) among loaded categories
    const match = categories.find(
      (c) => c.category && c.category.toLowerCase() === val.toLowerCase()
    )

    if (match) {
      // Pass the full category object when there's a match
      onChangeCategory(match)
    } else {
      // No exact match yet (user typing) — notify parent with null
      onChangeCategory(null)
    }
  }

  return (
    <>
      <input
        className="form-control"
        list="categories-list"
        placeholder="Selecciona o escribe una categoría"
        aria-label="Buscar categoría"
        value={inputValue}
        onChange={handleInputChange}
      />

      <datalist id="categories-list">
        {categories.map((category) => (
          <option key={category.id} value={category.category} />
        ))}
      </datalist>
    </>
  )
}

export default CategorySelect
