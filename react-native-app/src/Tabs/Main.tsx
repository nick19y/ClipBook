import { VStack, Text, Divider, Box } from "native-base";
import Title from "../components/Title";
import Logo from "../components/Logo";
export default function Main(){
    return(
        <VStack>
            <Box py={10} px={20} mx={19}>
                <Logo></Logo>
                <Title color={"black"}>Bem vindo, Nícolas!</Title>
            </Box>
            <Divider/>
            <Box>
                <Title>Seu último corte:</Title>
            </Box>
        </VStack>
    )
}