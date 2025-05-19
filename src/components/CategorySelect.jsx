import './CategorySelect.css'

function CategorySelect() {

    const categories = [
        { id: 1, name: 'Restaurantes' },
        { id: 2, name: 'Mercado' },
        { id: 3, name: 'Servicios Publicos' }
    ]

    return (
        <>
            <select class="form-select" aria-label="Default select example">
                <option selected>Selecciona Categoria</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                ))}
            </select>
        </>
    )
}

export default CategorySelect
