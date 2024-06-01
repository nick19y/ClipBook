import { VStack, Image, Text, FormControl, Input } from "native-base";
import Scissors from '../assets/scissors32.png';

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
    value?: string;
    onChangeText?:(text:string)=>void;
  }


export default function InputText({ 
    label, 
    placeholder, 
    secureTextEntry = false,
    value,
    onChangeText
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
            shadow={1}
            value={value}
            onChangeText={onChangeText}></Input>
          </FormControl>
  );
}