import { VStack, Image, Text, Box, FormControl, Input, Button, Center, Link } from "native-base";
import Scissors from './assets/scissors32.png';
import Logo from "./components/Logo";
import { TouchableOpacity } from "react-native";
import Title from "./components/Title";
import InputText from "./components/InputText";
import { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

export default function RegisterUser() {
  const [numberSession, setNumberSection] = useState(0);
  const sections = [
    {
      id:1,
      title: 'Insira seus dados para cadastro',
      inputText: [
        {
          id: 1,
          label:'Nome',
          placeholder:  'Digite seu nome completo'
        },
        {
          id: 2,
          label:'Email',
          placeholder:'Digite o seu email',
        },
        {
          id: 3,
          label:'Crie uma senha',
          placeholder:'Insira sua senha',
        },
        {
          id: 4,
          label:'Repita a senha',
          placeholder:'Insira sua senha',
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
        },
        {
          id: 2,
          label: 'Data de nascimento',
          placeholder: '00/00/0000',
        },
        {
          id: 3,
          label: 'Telefone',
          placeholder: 'Digite seu telefone',
        },
        {
          id: 4,
          label: 'CEP',
          placeholder: 'Digite o seu CEP',
        },
      ]
    }
  ]

  function advanceSession(){
    if(numberSession<sections.length-1){
      setNumberSection(numberSession+1)
    }
  }

  function returnSession(){
    if(numberSession>0){
      setNumberSection(numberSession-1)
    }
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
          sections[numberSession].inputText.map(input=>{
            return <InputText label={input.label} placeholder={input.placeholder} key={input.id}></InputText>
          })
        }
        </Box>
        {numberSession>0 && <Button _pressed={{ bg: 'gray.700' }} onPress={()=>returnSession()} w='100%' bg='gray.500' mt={10}>Voltar</Button>}
        {numberSession<sections.length-1 && <Button _pressed={{ bg: 'gray.700' }}  onPress={()=>advanceSession()} w='100%' bg='brown' mt={8}>Avançar</Button>}
        {numberSession===sections.length-1 && <Button _pressed={{ bg: 'gray.700' }} onPress={()=>advanceSession()} w='100%' bg='brown' mt={8}>Cadastrar</Button>}
    </VStack>
  );
}