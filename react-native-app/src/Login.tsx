import { VStack, Image, Text, Box, FormControl, Input, Button, Center, Link, useToast, View } from "native-base";
import Scissors from './assets/scissors32.png';
import Logo from "./components/Logo";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import Title from "./components/Title";
import { useEffect, useState } from "react";
import { SignIn } from "./services/AuthenticationService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

export default function Login({navigation}:any) {
  const [login, setLogin] = useState('');
  const [user_password, setPassword] = useState('');
  const [loading, setLoading] = useState(true)
  const toast = useToast();

  useEffect(()=>{
    async function checkLogin(){
      const token = await AsyncStorage.getItem('token')
      if(token){
        navigation.replace('Tabs');
      }
      setLoading(false);
    }
    checkLogin()
  }, [])

  async function singIn(){
    const result = await SignIn(login, user_password)
    if(result){
      const {token} = result;
      AsyncStorage.setItem('token', token);
      const decodedToken = jwtDecode(token) as any;
      const userId = decodedToken.id;
      const userIdString = userId.toString();
      AsyncStorage.setItem('userId', userIdString);
      navigation.replace('Tabs');
    } else{
      toast.show({
        title: "Erro ao efetuar login",
        description: "Email ou senha não conferem",
        backgroundColor:"red.500",
        justifyContent:"center",
        alignItems: "center"
      })
    }
  }
  if(loading){
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="black" />
        <Text>Carregando...</Text>
      </View>
    );
  }
    
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
            shadow={1}
            value={login}
            onChangeText={setLogin}></Input>
          </FormControl>
          <FormControl mt={5}>
            <FormControl.Label>Senha</FormControl.Label>
            <Input
            placeholder="Insira a sua senha"
            size="lg"
            width="100%"
            borderRadius='lg'
            bgColor='gray.100'
            shadow={1}
            value={user_password}
            onChangeText={setPassword}
            secureTextEntry></Input>
          </FormControl>
        </Box>
        <Button _pressed={{ bg: 'gray.700' }} w='100%' bg='brown' mt={10} onPress={singIn}>Entrar</Button>
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
const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
