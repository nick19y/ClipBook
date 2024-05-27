import { User } from "../interfaces/User";
import api from "./api";

export async function registerUser(user:User){
    if(!user){
        return null;
    }
    try{
        const result = await api.post('/user', user);
        return result.data;
    }
    catch(error){
        return null;
    }
}