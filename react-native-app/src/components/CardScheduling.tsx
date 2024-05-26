import { VStack, Button, Box, Text } from "native-base";
import { StyleSheet } from "react-native";
import { Image } from "react-native";

interface CardProps{
    name: string;
    image?: string;
    evaluation: number;
    date?:string;
    attended?: boolean;
    scheduled?: boolean;
}

function renderStars(evaluation:number) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < evaluation) {
        stars.push('⭐️');
      }
    }
    return stars;
  }

export function CardScheduling({name, image, evaluation, date, attended, scheduled}: CardProps){
    return(
        <VStack w={"100%"} bg={attended ? 'lightBeige': 'white'} p={4} shadow={2} mb={10}>
            {/* colocar o mb no last child */}
            <VStack flexDir={"row"}>
                <Box borderWidth={2} w={20} alignItems={"center"} py={5} borderRadius={50}>
                    <Image source={require("../assets/user.png")}></Image>
                </Box>
                <VStack ml={3} mt={1}>
                    <Text fontSize={"md"} fontWeight={"bold"}>Barbeiro {name}</Text>
                    <Text>{date}</Text>
                    <Text>Avaliação: {renderStars(evaluation)}</Text>
                </VStack>
            </VStack>
            <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='100%' bg='brown' mt={3}>
            {scheduled ? 'Cancelar': 'Agendar'}
            </Button>
        </VStack>
    )
}
