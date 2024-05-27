import { VStack, Image, Text, Box, FormControl, Input, Button, Center, Link, useToast } from "native-base";
import Scissors from './assets/scissors32.png';
import Logo from "./components/Logo";
import { TouchableOpacity } from "react-native";
import Title from "./components/Title";
import InputText from "./components/InputText";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";
import { registerUser } from "./services/UserService";
import { useNavigation } from "expo-router";

export default function RegisterUser() {
  const [numberSession, setNumberSection] = useState(0);
  const [data, setData] = useState({} as any);
  const toast = useToast();
  const navigation = useNavigation();
  const sections = [
    {
      id:1,
      title: 'Insira seus dados para cadastro',
      inputText: [
        {
          id: 1,
          label:'Nome',
          placeholder:  'Digite seu nome completo',
          name: 'name',
        },
        {
          id: 2,
          label:'Email',
          placeholder:'Digite o seu email',
          name: 'login',
        },
        {
          id: 3,
          label:'Crie uma senha',
          placeholder:'Insira sua senha',
          name: 'user_password',
          secureTextEntry: true,
        }
      ]
    },
    {
      id:2,
      title: 'Insira seus dados para cadastro',
      inputText:[
        {
          id: 1,
          label: 'CPF',
          placeholder: 'Digite seu CPF',
          name: 'CPF',
        },
        {
          id: 2,
          label: 'Data de nascimento',
          placeholder: '00/00/0000',
          name: 'birth_date',
        },
        {
          id: 3,
          label: 'Telefone',
          placeholder: 'Digite seu telefone',
          name: 'phone_number',
        },
        {
          id: 4,
          label: 'CEP',
          placeholder: 'Digite o seu CEP',
          name: 'CEP',
        },
      ]
    }
  ]

  

  function advanceSession(){
    if(numberSession<sections.length-1){
      setNumberSection(numberSession+1)
    }
    else{
      register({navigation});
    }
  }

  function returnSession(){
    if(numberSession>0){
      setNumberSection(numberSession-1)
    }
  }

  function updateData(id:string, value:string){
    setData({...data, [id]:value})
  }

  async function register({navigation} : {navigation:any}){
    const result = await registerUser({
      name: data.name,
      user_password: data.user_password,
      CPF: data.CPF,
      birth_date: data.birth_date,
      phone_number: data.phone_number,
      CEP: data.CEP,
      login: data.login
    })
    toast.show({
      title: "Cadastro efetuado com sucesso",
      backgroundColor:"green.500",
      justifyContent:"center",
      alignItems:"center",
      textAlign:"center",
      marginBottom:18,
      width:300,
      height:20
    });
    setTimeout(() => {
      navigation.replace('Login');
    }, 1000);
  }

  return (
    <VStack flex={1} alignItems="center" p={10} justifyContent='center'>
      <VStack mt={10}>
        <Logo></Logo>
      </VStack>
        <Title textAlign='center'>
          {sections[numberSession].title}
        </Title>
        <Box>
          {
          sections[numberSession]?.inputText?.map(input=>{
            return ( <InputText 
            label={input.label} 
            placeholder={input.placeholder} 
            key={input.id}
            secureTextEntry={input.secureTextEntry}
            // value={input.name}
            onChangeText={(text)=>{updateData(input.name, text)}}
            />)
          })
        }
        </Box>
        {numberSession>0 && <Button _pressed={{ bg: 'gray.700' }} onPress={()=>returnSession()} w='100%' bg='gray.500' mt={10}>Voltar</Button>}
        {numberSession<sections.length-1 && <Button _pressed={{ bg: 'gray.700' }}  onPress={()=>advanceSession()} w='100%' bg='brown' mt={8}>Avançar</Button>}
        {numberSession===sections.length-1 && <Button _pressed={{ bg: 'gray.700' }} onPress={()=>advanceSession()} w='100%' bg='brown' mt={8}>Cadastrar</Button>}
    </VStack>
  );
}