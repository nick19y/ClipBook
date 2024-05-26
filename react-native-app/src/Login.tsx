import { VStack, Image, Text, Box, FormControl, Input, Button, Center, Link } from "native-base";
import Scissors from './assets/scissors32.png';
import Logo from "./components/Logo";
import { TouchableOpacity } from "react-native";
import Title from "./components/Title";

export default function Login({navigation}:{navigation: any}) {
  return (
    <VStack flex={1} alignItems="center" p={10} justifyContent='center'>
      <VStack mt={10}>
        <Logo></Logo>
      </VStack>
        <Title>
          Faça login em sua conta
        </Title>
        <Box>
          <FormControl mt={5}>
            <FormControl.Label>Email</FormControl.Label>
            <Input
            placeholder="Insira o seu email"
            size="lg"
            width="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={1}></Input>
          </FormControl>
          <FormControl mt={5}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
            placeholder="Insira a sua senha"
            size="lg"
            width="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={1}></Input>
          </FormControl>
        </Box>
        <Button _pressed={{ bg: 'gray.700' }} w='100%' bg='brown' mt={10} onPress={()=>navigation.navigate('Tabs')}>Entrar</Button>
        <Link mt={5} href="">Esqueceu sua senha?</Link>

        <Box w="100%" flexDirection="row" justifyContent='center' mt={20}>
          <Text>Ainda não tem uma conta?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('RegisterUser')}>
            <Text color='brown' ml={1}>
            Faça o seu cadastro!
            </Text>
          </TouchableOpacity>
        </Box>
    </VStack>
  );
}