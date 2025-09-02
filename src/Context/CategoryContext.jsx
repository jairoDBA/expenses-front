import { createContext, useState, useContext } from 'react'

const CategoryContext = createContext()

export const CategoryProvider = ({ children }) => {

    const [categories, setCategories] = useState([]);

    const fetchCategories = async () => {
        try {
            const response = await fetch('http://localhost:8080/category');
            const data = await response.json();
            setCategories(data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const saveCategory = async (category) => {
        const body = JSON.stringify({
            category
        })
        try {
            const response = await fetch('http://localhost:8080/category', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: body
            });
            console.log('body:', body);

            if (!response.ok) {
                throw new Error(`Error: ${response.status}`);
            }

            const data = await response.json();
            console.log('Category saved successfully:', data);
            fetchCategories();
        } catch (error) {
            console.error('Error category save:', error);
        }
    };

    return (
        <CategoryContext.Provider value={{ categories, fetchCategories, saveCategory }}>
            {children}
        </CategoryContext.Provider>
    )
}

export function useCategoryContext() {
    return useContext(CategoryContext)
}