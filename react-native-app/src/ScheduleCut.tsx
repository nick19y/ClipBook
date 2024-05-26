import { Box, Button, Text, VStack } from "native-base";
import Title from "./components/Title";
import InputText from "./components/InputText";
import { Agenda, Calendar } from "react-native-calendars";
import { useState } from "react";

export default function ScheduleCut(){
    const [selected, setSelected] = useState('');
    return(
        <VStack>
            <Title color={"brown"}>Agendar Corte</Title>
            <Box mx={10}>
                <InputText label="Nome" placeholder="Digite o nome do barbeiro"/>
                <InputText label="Horário" placeholder="00:00"/>
            </Box>
            <Title>Selecione a data do corte</Title>
            <Box mx={8} mt={5}>
                <Calendar onDayPress={day => {
                    setSelected(day.dateString);
                }}
                markedDates={{
                    // '2024-05-01': {selected: true, marked: true, selectedColor: 'blue'},
                    [selected]: {selected: true, disableTouchEvent: true, selectedColor: 'black'}
                }}/>
            </Box>
            
            <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='brown' mt={10}>Agendar corte</Button>
        </VStack>
    )
}