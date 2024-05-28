import { VStack, Text, ScrollView, Divider, Box, Button, isEmptyObj } from "native-base";
import { Image, StyleSheet } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData } from "../services/UserService";
import { User } from "../interfaces/User";

export default function Profile({navigation}:any){
    const[userData, setUserData] = useState({} as User)

    useEffect(()=>{
        async function userData(){
            const userId = await AsyncStorage.getItem('userId')
            if(!userId){
                return null;
            }
            const result = await getUserData(userId);
            if(result){
                setUserData(result);
            }
        }
        userData();
    }, [])
    function logout(){
        AsyncStorage.removeItem('token');
        AsyncStorage.removeItem('userId');
        navigation.replace('Login');
    }
    return(
        <ScrollView>
            <VStack>
                <Title color={"brown"}>Meu Perfil</Title>
                <Box borderWidth={2} w={20} alignSelf="center" px={10} py={5} mt={5} borderRadius={50}>
                    <Image style={styles.imgProfile} source={require("../assets/user.png")}></Image>
                </Box>
                <Title color={"brown"}>Informações pessoais</Title>
                <Box alignItems={"center"} mt={5}>
                    <Text>Nome: {userData.name}</Text>
                    <Text>Nascimento: {userData.birth_date}</Text>
                    <Text>Email: {userData.login}</Text>
                    <Text>Telefone: {userData.phone_number}</Text>
                </Box>
                <Divider mt={15}/>
                <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='brown' mt={10}>Atualizar dados</Button>
                <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='gray.500' mt={5} onPress={logout}>Sair</Button>
            </VStack>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imgProfile:{
        alignSelf: 'center',
    }
})