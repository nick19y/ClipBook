import {NativeBaseProvider, StatusBar, theme} from 'native-base';

import { themes } from '@/src/styles/themes';
import Routes from '@/src/Routes';

export default function HomeScreen() {
  return (
    <NativeBaseProvider theme={themes}>
      <StatusBar backgroundColor={themes.colors.lightBrown}></StatusBar>
      <Routes/>
    </NativeBaseProvider>
  );
}