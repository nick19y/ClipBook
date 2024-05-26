import { VStack, Image, Text } from "native-base";
import Scissors from '../assets/scissors32.png';

export default function Logo() {
  return (
    <VStack flexDirection={"row"} borderWidth={2} px={5} py={8} borderRadius={50} bgColor='lightBeige' alignItems={"center"} justifyContent={"center"}>
        <Image source={Scissors} alt="Logo"></Image>
        <Text fontSize="lg">ClipBook</Text>
    </VStack>
  );
}