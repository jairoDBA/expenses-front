import { useEffect, useState } from 'react'

function useGetExpenses() {
    const [expenses, setExpenses] = useState([
        { id: 1, executeExpenseDate: '2007-12-03', amount: 2500, fixedExpense: true, resource: 'NOTA', isDivisible: false, category: { id: 1, category: 'AGUA' } },
        { id: 2, executeExpenseDate: '2007-12-04', amount: 3000, fixedExpense: true, resource: 'NOTA', isDivisible: true, category: { id: 1, category: 'Restaurante' } }
    ]);


    useEffect(() => {
        const fetchExpenses = async () => {
            try {
                const response = await fetch('http://localhost:8080/expense?initDate=2025-01-01&endDate=2025-12-31');
                const data = await response.json();
                setExpenses(data);
            } catch (error) {
                console.error('Error fetching expenses:', error);
            }
        };

        fetchExpenses();
    }, []);

    return { expenses };
}

export default useGetExpenses;