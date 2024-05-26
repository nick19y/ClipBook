import { VStack, Text, ScrollView, Divider, Box, Button } from "native-base";
import { Image, StyleSheet } from "react-native";
import Title from "../components/Title";

export default function Profile(){
    return(
        <ScrollView>
            <VStack>
                <Title color={"brown"}>Meu Perfil</Title>
                <Box borderWidth={2} w={20} alignSelf="center" px={10} py={5} mt={5} borderRadius={50}>
                    <Image style={styles.imgProfile} source={require("../assets/user.png")}></Image>
                </Box>
                <Title color={"brown"}>Informações pessoais</Title>
                <Box alignItems={"center"} mt={5}>
                    <Text>Nome: Pedro Silva</Text>
                    <Text>Nascimento: 12/10/2001</Text>
                    <Text>Cidade: São Paulo</Text>
                    <Text>Email: pedro.silva@example.com</Text>
                    <Text>Telefone: (11) 1234-5678</Text>
                </Box>
                <Divider mt={15}/>
                <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='brown' mt={10}>Atualizar dados</Button>
                <Button _pressed={{ bg: 'gray.700' }} alignSelf={"center"} w='50%' bg='gray.500' mt={5}>Sair</Button>
            </VStack>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    imgProfile:{
        alignSelf: 'center',
    }
})