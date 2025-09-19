import { createContext, useState, useContext } from 'react'

const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);
    const [toast, setToast] = useState({ show: false, message: '', variant: 'success' });

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/category');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const saveCategory = async (category, id = null) => {
        // Backend expects POST for both create and update. Include id in body when updating.
        const payload = id ? { id, category } : { category };
        const body = JSON.stringify(payload);
        const url = 'http://localhost:8080/category';
        setLoading(true);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body
            });
            console.log(`POST ${url} body:`, body);

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                const message = data.message || `Error: ${response.status}`;
                setToast({ show: true, message, variant: 'danger' });
                throw new Error(message);
            }

            const data = await response.json();
            console.log('Category saved/updated successfully:', data);
            setToast({ show: true, message: data.message || 'Operación exitosa', variant: 'success' });
            fetchCategories();
        } catch (error) {
            console.error('Error saving/updating category:', error);
            if (!toast.show) setToast({ show: true, message: error.message || 'Error inesperado', variant: 'danger' });
        } finally {
            setLoading(false);
        }
    };

    const deleteCategory = async (id) => {
        setLoading(true);
        try {
            const response = await fetch(`http://localhost:8080/category/${id}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                const backendMessage = (data && data.message) ? String(data.message).toLowerCase() : '';
                // Friendly message when deletion is blocked because category is in use
                let message;
                if (response.status === 409 || /constraint|referenc|in use|foreign key|associated|cannot delete/i.test(backendMessage)) {
                    message = 'No se puede eliminar la categoría porque está asociada a uno o más gastos.';
                } else {
                    message = data.message || `Error al eliminar la categoría: ${response.status}`;
                }
                setToast({ show: true, message, variant: 'danger' });
                throw new Error(message);
            }
            const data = await response.json().catch(() => ({}));
            setToast({ show: true, message: data.message || 'Eliminado correctamente', variant: 'success' });
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
            if (!toast.show) setToast({ show: true, message: error.message || 'Error al eliminar', variant: 'danger' });
        } finally {
            setLoading(false);
        }
    };

    return (
        <CategoryContext.Provider value={{ categories, fetchCategories, saveCategory, deleteCategory, loading, toast, setToast }}>
            {children}
        </CategoryContext.Provider>
    )
}

export function useCategoryContext() {
    return useContext(CategoryContext)
}