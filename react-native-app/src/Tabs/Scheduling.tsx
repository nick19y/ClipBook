import { VStack, Box, Text, Button, Icon, ScrollView, Divider } from "native-base";
import { CardScheduling } from "../components/CardScheduling";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { Haircut } from "../interfaces/Haircut";
import { listHaircut } from "../services/HaircutService";
import { useFocusEffect } from "expo-router";

export default function Scheduling({navigation}:{navigation:any}){
    const [haircutList, setHaircutList] = useState<Haircut[]>([]);
    const [scheduledHaircuts, setScheduledHaircuts] = useState<Haircut[]>([]);
    const [finalizedHaircuts, setFinalizedHaircuts] = useState<Haircut[]>([]);

    const listHaircuts = async () => {
        const result: Haircut[] = await listHaircut();
        setHaircutList(result);
        const scheduled = result.filter(haircut => !haircut.finalized);
        const finalized = result.filter(haircut => haircut.finalized);
        setScheduledHaircuts(scheduled);
        setFinalizedHaircuts(finalized);
    };

    useEffect(()=>{
        listHaircuts();
    }, []);
    
    const handleReload = () => {
        listHaircuts();
    };
    const formatDateString = (dateString:any) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString('pt-BR');
    };
    useFocusEffect(
        React.useCallback(() => {
            handleReload();
        }, [])
    );
    return (
        <Box flex={1}>
            <ScrollView p={5} flex={1}>
                <Title color={"brown"} fontSize={30} mb={5}>Meus cortes</Title>
                <Divider />
                <Title mb={5}>Agendados</Title>
                {scheduledHaircuts.map((haircut: Haircut) => (
                    <CardScheduling
                        key={haircut.id}
                        id={haircut.id}
                        name={haircut.barber_name}
                        date={formatDateString(haircut.appointment_date)}
                        appointment_time={haircut.appointment_time}
                        scheduled
                    />
                ))}
                <Divider />
                <Title mb={5}>Cortes finalizados</Title>
                {finalizedHaircuts.map((haircut: Haircut) => (
                    <CardScheduling
                        key={haircut.id}
                        id={haircut.id}
                        name={haircut.barber_name}
                        date={formatDateString(haircut.appointment_date)}
                        evaluation={5}
                        attended
                    />
                ))}
            </ScrollView>
            <Box position="absolute" bottom={0} right={10}>
                <Button 
                    bgColor={"brown"} 
                    borderRadius="full"
                    width={16}
                    height={16} 
                    justifyContent="center" 
                    alignItems="center" 
                    onPress={()=>navigation.navigate('Buscar')}
                    _pressed={{ bg: 'gray.700' }}
                >
                    <Ionicons name="add" size={30} style={{ color: "white" }} />
                </Button>
            </Box>
        </Box>
    );
}
