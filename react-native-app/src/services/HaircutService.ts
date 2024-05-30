import { Haircut } from "../interfaces/Haircut";
import api from "./api";

export async function scheduleHaircut(haircut: Haircut){
    if(!haircut){
        return null;
    }
    try{
        const result = await api.post('/haircut', haircut);
        console.log("funciona")
        return result.data;
    } catch(error){
        console.log(error);
        return null;
    }
}