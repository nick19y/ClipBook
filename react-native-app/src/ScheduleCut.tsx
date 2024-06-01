import { Box, Button, Toast, VStack, useToast } from "native-base";
import Title from "./components/Title";
import InputText from "./components/InputText";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
import { useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { scheduleHaircut } from "./services/HaircutService";
import { useNavigation } from "expo-router";
import InputTextTime from "./components/InputTextTime";

interface Params {
    name?: string;
    id?: string;
}

interface Haircut {
    id: any;
    barber_name: string;
    appointment_date: string;
    appointment_time: any;
    user_id: number;
    price: number;
    finalized: boolean;
}

export default function ScheduleCut() {
    const [data, setData] = useState({} as any);
    const [selected, setSelected] = useState('');
    const routes = useRoute();
    const { name = '', id = 0 } = routes.params as Params || {};
    const toast = useToast();
    const navigation:any = useNavigation();

    function updateData(id: string, value: string) {
        setData({ ...data, [id]: value });
    }

    async function schedule() {
        const userId = await AsyncStorage.getItem('userId');
        const user_id = userId ? parseInt(userId) : 0;

        const result = await scheduleHaircut({
            id: data.id,
            barber_name: name,
            appointment_date: selected,
            appointment_time: data.appointment_time,
            user_id: user_id,
            price: 50,  // Adicionando o preço padrão
            finalized: false  // Definindo como não finalizado
        });

        toast.show({
            title: "Corte agendado com sucesso",
            backgroundColor: "green.500",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            marginBottom: 18,
            width: 300,
            height: 20
        });

        setTimeout(() => {
            navigation.navigate('Agendamentos');
        }, 1000);
    }

    return (
        <VStack>
            <Title color={"brown"}>Agendar Corte</Title>
            <Box mx={10}>
                <InputText 
                    label="Nome" 
                    value={name} 
                    placeholder="Digite o nome do barbeiro"
                    onChangeText={(text) => updateData('name', text)}
                />
                <InputTextTime 
                    label="Horário" 
                    placeholder="00:00:00" 
                    value={data.appointment_time}
                    onChangeText={(text) => updateData('appointment_time', text)}
                />
            </Box>
            <Title>Selecione a data do corte</Title>
            <Box mx={8}>
                <Calendar onDayPress={day => {
                    setSelected(day.dateString);
                }}
                    markedDates={{
                        [selected]: { selected: true, disableTouchEvent: true, selectedColor: 'black' }
                    }} />
            </Box>

            <Button 
                _pressed={{ bg: 'gray.700' }} 
                alignSelf={"center"} 
                w='50%' 
                bg='brown' 
                mt={10} 
                onPress={schedule}
            >
                Agendar corte
            </Button>
        </VStack>
    );
}
