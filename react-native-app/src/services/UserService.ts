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
export async function getUserData(id:string){
    try{
        const result = await api.get(`/user/${id}`)
        return result.data;
    }
    catch(error){
        console.log(error)
        return null
    }
}
getUserData("1");