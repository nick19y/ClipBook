import { VStack, Box, Text, Button, Icon, ScrollView, Divider } from "native-base";
import { CardScheduling } from "../components/CardScheduling";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { Haircut } from "../interfaces/Haircut";
import { listHaircut } from "../services/HaircutService";

export default function Scheduling({navigation}:{navigation:any}){
    const [haircutList, setHaircutList] = useState<Haircut[]>([]);

    const listHaircuts = async () => {
        const result:any = await listHaircut();
        setHaircutList(result);
    };

    useEffect(()=>{
        listHaircuts();
    }, []);

    const handleReload = () => {
        listHaircuts();
    };

    handleReload();
    return(
        <Box flex={1}>
            <ScrollView p={5} flex={1}>
                <Title color={"brown"} fontSize={30} mb={5}>Meus cortes</Title>
                <Divider/>
                <Title mb={5}>Agendados</Title>
                {haircutList.map((haircut: Haircut)=>(
                    <CardScheduling
                        key={haircut.id}
                        id={haircut.id}
                        name={haircut.barber_name}
                        date={haircut.appointment_date}
                        appointment_time={haircut.appointment_time}
                        scheduled
                    />
                ))}
                <Divider/>
                <Title mb={5}>Cortes finalizados</Title>
                <CardScheduling
                    id={2}
                    name='Gabriel Barbosa'
                    date="20/08/2024"
                    evaluation={5}
                    attended
                />
            </ScrollView>
            <Box position="absolute" bottom={0} right={10}>
                <Button 
                    bgColor={"brown"} 
                    borderRadius="full"
                    width={16}
                    height={16} 
                    justifyContent="center" 
                    alignItems="center" 
                    onPress={() => navigation.navigate('Buscar')}
                >
                    <Ionicons name="add" size={30} style={{ color: "white" }}/>
                </Button>
            </Box>
        </Box>
    )
}
