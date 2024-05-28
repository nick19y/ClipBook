import api from './api';

export interface Employee {
    id: number;
    name: string;
    evaluation: number;
}

export async function getEmployeeByName(name: string): Promise<Employee[]> {
    try {
        const result = await api.get('/employee/search', {
            params: { name }
        });
        return Array.isArray(result.data) ? result.data : [result.data];
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function listEmployee(): Promise<Employee[]> {
    try {
        const result = await api.get('/employee');
        return result.data;
    } catch (error) {
        console.error(error);
        return [];
    }
}
