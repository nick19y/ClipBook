import { useNavigation } from "@react-navigation/native";
import { VStack, Box, Text, Button, Image } from "native-base";
import { useState } from "react";

interface CardProps {
    id: number;
    name: string;
    image?: string;
    evaluation: number;
    date?: string;
    attended?: boolean;
    scheduled?: boolean;
    onPress?: () => void; // Adicionando onPress à interface
}

function renderStars(evaluation: number) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < evaluation) {
            stars.push('⭐️');
        }
    }
    return stars;
}

export function CardScheduling({ id, name, image, evaluation, date, attended, scheduled, scheduled: initialScheduled, onPress }: CardProps) {
    const navigation:any = useNavigation(); // Use o hook useNavigation do @react-navigation/native
    const [isScheduled, setIsScheduled] = useState(initialScheduled || false);
    const handleCancel = () => {
        setIsScheduled(false);
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
                    <Image source={require("../assets/user.png")} />
                </Box>
                <VStack ml={3} mt={1}>
                    <Text fontSize="md" fontWeight="bold">Barbeiro {name}</Text>
                    <Text>{date}</Text>
                    <Text>Avaliação: {renderStars(evaluation)}</Text>
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
