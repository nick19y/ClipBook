import { VStack, Text, Divider, Box, Button } from "native-base";
import Title from "../components/Title";
import Logo from "../components/Logo";
import { Calendar } from "react-native-calendars";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData } from "../services/UserService";
import { User } from "../interfaces/User";
export default function Main({navigation}: {navigation:any}){
    const [selected, setSelected] = useState('');
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
    }, []);
    
    const getFirstName = (fullName: string) => {
        return fullName.split(' ')[0];
    };
    
    return(
        <VStack>
            <Box py={7} px={20} mx={19}>
                <Logo></Logo>
                <Title color={"black"} fontSize={20} textAlign={"center"}>Bem vindo, {userData.name ? getFirstName(userData.name) : ''}!</Title>
            </Box>
            <Divider/>
            <Box mb={2}>
                <Title>Seu último corte: 22/05/2024</Title>
            </Box>
            <Box mx={5}>
                <Calendar onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    '2024-05-22': {selected: true, marked: false, selectedColor: 'black'},
                    // [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'black'}
                }}/>
            </Box>
            <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='brown' mt={10} onPress={()=>navigation.navigate('ScheduleCut')}>Agendar corte</Button>
        </VStack>
    )
}