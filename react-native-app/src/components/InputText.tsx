import { VStack, Image, Text, FormControl, Input } from "native-base";
import Scissors from '../assets/scissors32.png';

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
  }


export default function InputText({ 
    label, 
    placeholder, 
    secureTextEntry = false
} : InputProps) : JSX.Element {
  return (
    <FormControl mt={5}>
            {label && <FormControl.Label>{label}</FormControl.Label>}
            <Input
            placeholder={placeholder}
            size="lg"
            width="100%"
            borderRadius='lg'
            bgColor='gray.100'
            secureTextEntry={secureTextEntry}
            shadow={1}></Input>
          </FormControl>
  );
}