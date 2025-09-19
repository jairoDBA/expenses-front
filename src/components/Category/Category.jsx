import { useEffect, useState } from "react";
import CategoryInput from "../CategoryInput/CategoryInput";
import { useCategoryContext } from "../../Context/CategoryContext";

function Category() {
    const { categories, fetchCategories, saveCategory, deleteCategory, loading, toast, setToast } = useCategoryContext();

    const [editingId, setEditingId] = useState(null);
    const [editingValue, setEditingValue] = useState("");

    useEffect(() => {
        // load categories when the component mounts
        fetchCategories();
    }, []);

    return (
        <div>
            <h1>Categorias</h1>

            <h2>Nueva categoria</h2>
            <CategoryInput />

            <h2 className="mt-4">Listado de categorias</h2>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Categoria</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories && categories.length > 0 ? (
                            categories.map((cat) => (
                                <tr key={cat.id}>
                                    <td>{cat.id}</td>
                                    <td>
                                        {editingId === cat.id ? (
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                value={editingValue}
                                                onChange={(e) => setEditingValue(e.target.value)}
                                            />
                                        ) : (
                                            cat.category
                                        )}
                                    </td>
                                    <td>
                                        {editingId === cat.id ? (
                                            <div className="btn-group" role="group">
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() => {
                                                        const trimmed = editingValue.trim();
                                                        if (trimmed) {
                                                            // reuse saveCategory for update by passing the id
                                                            saveCategory(trimmed, cat.id);
                                                            setEditingId(null);
                                                            setEditingValue("");
                                                        }
                                                    }}
                                                    disabled={loading}
                                                >
                                                    {loading ? (
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    ) : (
                                                        'Guardar'
                                                    )}
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => {
                                                        setEditingId(null);
                                                        setEditingValue("");
                                                    }}
                                                    disabled={loading}
                                                >
                                                    Cancelar
                                                </button>
                                            </div>
                                        ) : (
                                            <div className="btn-group" role="group" aria-label="Acciones categoria">
                                                <button
                                                    className="btn btn-sm btn-outline-secondary"
                                                    onClick={() => {
                                                        setEditingId(cat.id);
                                                        setEditingValue(cat.category);
                                                    }}
                                                    disabled={loading}
                                                >
                                                    Editar
                                                </button>
                                                <button
                                                    className="btn btn-sm btn-outline-danger"
                                                    onClick={() => {
                                                        if (window.confirm('¿Eliminar esta categoría?')) {
                                                            deleteCategory(cat.id);
                                                        }
                                                    }}
                                                    disabled={loading}
                                                >
                                                    {loading ? (
                                                        <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                                                    ) : (
                                                        'Eliminar'
                                                    )}
                                                </button>
                                            </div>
                                        )}
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={3}>No hay categorias</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            {/* Toast (Bootstrap) positioned top-right */}
            <div aria-live="polite" aria-atomic="true" className="position-fixed" style={{ top: 20, right: 20, zIndex: 1080 }}>
                {toast.show && (
                    <div className={`toast align-items-center text-bg-${toast.variant} border-0 show`} role="alert" aria-live="assertive" aria-atomic="true">
                        <div className="d-flex">
                            <div className="toast-body">{toast.message}</div>
                            <button type="button" className="btn-close btn-close-white me-2 m-auto" aria-label="Close" onClick={() => setToast({ ...toast, show: false })}></button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Category;