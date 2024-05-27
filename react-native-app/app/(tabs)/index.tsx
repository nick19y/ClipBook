import {NativeBaseProvider, StatusBar, theme} from 'native-base';

import { themes } from '@/src/styles/themes';
import Routes from '@/src/Routes';
import { useEffect } from 'react';
import api from '@/src/services/api';

export default function App() {
  useEffect(() => {
    async function pegarDados(){
        const resultado = await api.get('/user')
            console.log(resultado.data)
    }
        pegarDados()
  }, [])
  return (
    <NativeBaseProvider theme={themes}>
      <StatusBar backgroundColor={themes.colors.lightBrown}></StatusBar>
      <Routes/>
    </NativeBaseProvider>
  );
}