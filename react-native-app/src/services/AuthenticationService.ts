import api from "./api";

export async function SignIn(login:string, user_password:string){
    if(!login || !user_password){
        return null;
    }
    try{
        const result = await api.post('/login', {
            login,
            user_password
        });
        // console.log(result.data);
        return result.data;
    }catch(error){
        // console.log(error);
        return null
    }
}