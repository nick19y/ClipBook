import { VStack, Text, Divider, Box, Button } from "native-base";
import Title from "../components/Title";
import Logo from "../components/Logo";
import { Calendar } from "react-native-calendars";
import { useState } from "react";
export default function Main({navigation}: {navigation:any}){
    const [selected, setSelected] = useState('');
    return(
        <VStack>
            <Box py={10} px={20} mx={19}>
                <Logo></Logo>
                <Title color={"black"} fontSize={20} textAlign={"center"}>Bem vindo, Nícolas!</Title>
            </Box>
            <Divider/>
            <Box mb={5}>
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