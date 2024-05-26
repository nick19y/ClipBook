import { MaterialIcons } from "@expo/vector-icons";
import { VStack, Text, Input, ScrollView, Box, Icon, Button, Divider } from "native-base";
import Title from "../components/Title";
import InputText from "../components/InputText";
import { CardScheduling } from "../components/CardScheduling";

export default function Explore({navigation}: {navigation: any}){
    return(
        <VStack>
            <Title>Busca de Cabeleireiros</Title>
            <Box>
                <Input bgColor='gray.100' shadow={1} borderRadius="lg" padding={3.5} mt={8} mx={3} size={"lg"} placeholder="Digite o nome do cabeleireiro" InputRightElement={<Icon as={<MaterialIcons name="search"/>}size={19} mr="5" color="muted.400" />}/>
                <Button _pressed={{ bg: 'gray.700' }} w='70%' alignSelf={"center"} bg='brown' mt={8} onPress={()=>navigation.navigate('Tabs')}>Buscar</Button>
            </Box>
            <Divider mt={5}/>
            <Box mb={20}>
                <ScrollView p={5}>
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={5}
                        />
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={4}
                        />
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={4}
                        />
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={4}
                        />
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={4}
                        />
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={4}
                        />
                    <CardScheduling
                        name="Juan Santos"
                        evaluation={4}
                        />
                </ScrollView>
            </Box>
        </VStack>
    )
}