import { useEffect, useState } from 'react'

function useGetCategories() {
const [categories, setCategories] = useState([
        { id: 1, category: 'Restaurantes' },
        { id: 2, category: 'Mercado' },
        { id: 3, category: 'Servicios Publicos' }
    ]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/category');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    return { categories,fetchCategories };
}

export default useGetCategories;