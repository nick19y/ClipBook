import { Haircut } from "../interfaces/Haircut";
import api from "./api";

export async function scheduleHaircut(haircut: Haircut){
    if(!haircut){
        return null;
    }
    try{
        const result = await api.post('/haircut', haircut);
        return result.data;
    } catch(error){
        console.log(error);
        return null;
    }
}
export async function listHaircut(): Promise<Haircut[]>{
    try{
        const result = await api.get(`/haircut`);
        return result.data;
    } catch(error){
        console.log(error);
        return [];
    }
}
export async function deleteHaircut(id: number): Promise<boolean> {
    try {
        const result = await api.delete(`/haircut/${id}`);
        return true;
    } catch (error) {
        return false;
    }
}
