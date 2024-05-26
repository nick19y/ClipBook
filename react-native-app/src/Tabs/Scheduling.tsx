import { VStack, Box, Text, Button, Icon, ScrollView, Divider } from "native-base";
import { CardScheduling } from "../components/CardScheduling";
import Title from "../components/Title";
import { Ionicons } from "@expo/vector-icons";

export default function Scheduling({navigation}:{navigation:any}){
    return(
        <Box flex={1}>
            <ScrollView p={5} flex={1}>
                <Title color={"brown"} fontSize={30} mb={5}>Meus cortes</Title>
                <Divider/>
                <Title mb={5}>Agendados</Title>
                <CardScheduling
                    name='João Mário'
                    date="10/07/2024"
                    evaluation={4}
                    scheduled
                />
                <Divider></Divider>
                <Title mb={5}>Cortes finalizados</Title>
                <CardScheduling
                    name='Gabriel Barbosa'
                    date="20/08/2024"
                    evaluation={5}
                    attended
                />
                <CardScheduling
                    name='Gabriel Barbosa'
                    date="20/08/2024"
                    evaluation={5}
                    attended
                />
                <CardScheduling
                    name='Gabriel Barbosa'
                    date="20/08/2024"
                    evaluation={5}
                    attended
                />
                <CardScheduling
                    name='Gabriel Barbosa'
                    date="20/08/2024"
                    evaluation={5}
                    attended
                />
                <CardScheduling
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
                    onPress={() => navigation.navigate('ScheduleCut')}
                >
                    <Ionicons name="add" size={30} style={{ color: "white" }}/>
                </Button>
            </Box>
        </Box>
    )
}
