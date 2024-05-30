import { useNavigation } from "@react-navigation/native";
import { format } from "date-fns";
import { VStack, Box, Text, Button, Image, useToast } from "native-base";
import { useState } from "react";
import { deleteHaircut } from "../services/HaircutService";

interface CardProps {
    id: number;
    name: string;
    image?: string;
    evaluation?: number;
    date?: string;
    attended?: boolean;
    scheduled?: boolean;
    appointment_date?: string;
    appointment_time?: string;
    onPress?: () => void;
}

function renderStars(evaluation?: number) {
    if (!evaluation) return null;
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < evaluation) {
            stars.push('⭐️');
        }
    }
    return stars;
}

export function CardScheduling({ id, name, image, evaluation, date, attended, scheduled, scheduled: initialScheduled, appointment_date, appointment_time, onPress }: CardProps) {
    const navigation:any = useNavigation();
    const [isScheduled, setIsScheduled] = useState(initialScheduled || false);
    const toast = useToast();

    const handleCancel = async () => {
        const deleted = await deleteHaircut(id);
        if (deleted) {
            setIsScheduled(false);
            toast.show({
                title: "Corte excluído com sucesso",
                backgroundColor: "green.500",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: 18,
                width: 300,
                height: 20
            });
        } else {
            console.log("Erro ao cancelar o corte.");
        }
    };

    const handleSchedule = () => {
        navigation.navigate('ScheduleCut', {
            name: name,
            id: id
        });
        setIsScheduled(true);
    };

    return (
        <VStack w="100%" bg={attended ? 'lightBeige' : 'white'} p={4} shadow={2} mb={10}>
            <VStack flexDir="row">
                <Box borderWidth={2} w={20} alignItems="center" py={5} borderRadius={50}>
                    <Image source={require("../assets/user.png")} alt=""/>
                </Box>
                <VStack ml={3} mt={1}>
                    <Text fontSize="md" fontWeight="bold">Barbeiro {name}</Text>
                    <Text>{date}</Text>
                    {appointment_time &&<Text>{appointment_time}</Text>}
                    {evaluation && <Text>Avaliação: {renderStars(evaluation)}</Text>}
                </VStack>
            </VStack>
            <Button
                _pressed={{ bg: 'gray.700' }}
                alignSelf="center"
                w='100%'
                bg='brown'
                mt={3}
                onPress={onPress ? onPress : (scheduled ? handleCancel : handleSchedule)}
            >
                {scheduled ? 'Cancelar' : 'Agendar'}
            </Button>
        </VStack>
    )
}
