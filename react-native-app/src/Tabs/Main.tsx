import { VStack, Text, Divider, Box, Button } from "native-base";
import Title from "../components/Title";
import Logo from "../components/Logo";
import { Calendar } from "react-native-calendars";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData } from "../services/UserService";
import { User } from "../interfaces/User";
import { listHaircut } from "../services/HaircutService";
import { useFocusEffect } from "expo-router";
export default function Main({navigation}: {navigation:any}){
    const [selected, setSelected] = useState('');
    const[userData, setUserData] = useState({} as User)
    const[lastHaircutDate, setLastHaircutDate] = useState('');
    async function fetchLastHaircut() {
            const haircuts = await listHaircut();
            const lastHaircut = haircuts.find(cut => cut.finalized);
            if (lastHaircut) {
                setLastHaircutDate(lastHaircut.appointment_date);
            }
        }
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
    
    useEffect(() => {
        fetchLastHaircut();
    }, []);

    const getFirstName = (fullName: string) => {
        return fullName.split(' ')[0];
    };
    
    const formatDateString = (dateString:any) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };
    useFocusEffect(
        React.useCallback(() => {
            fetchLastHaircut();
        }, [])
    );
    return (
        <VStack>
            <Box py={7} px={20} mx={19}>
                <Logo></Logo>
                <Title color={"black"} fontSize={20} textAlign={"center"}>Bem vindo, {userData.name ? getFirstName(userData.name) : ''}!</Title>
            </Box>
            <Divider />
            <Box mb={2}>
                <Title>Seu último corte: {formatDateString(lastHaircutDate)}</Title>
            </Box>
            <Box mx={5}>
                <Calendar
                    onDayPress={day => {
                        setSelected(day.dateString);
                    }}
                    markedDates={{
                        [lastHaircutDate]: { selected: true, marked: false, selectedColor: 'black' }
                    }}
                />
            </Box>
            <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='brown' mt={10} onPress={()=>navigation.navigate('Buscar')}>Agendar corte</Button>
        </VStack>
    );
}