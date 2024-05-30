import { VStack, Image, Text, FormControl, Input } from "native-base";
import Scissors from '../assets/scissors32.png';
import React from 'react';

interface InputProps {
    label?: string;
    placeholder: string;
    secureTextEntry?: boolean;
    leftIcon?: React.ReactNode;
    value?: string;
    onChangeText?:(text:string)=>void;
}

function formatTimeInput(value: string): string {
    let cleaned = value.replace(/\D/g, '');

    if (cleaned.length > 6) {
        cleaned = cleaned.substring(0, 6);
    }

    let formatted = cleaned;
    if (cleaned.length > 2) {
        formatted = cleaned.slice(0, 2) + ':' + cleaned.slice(2);
    }
    if (cleaned.length > 4) {
        formatted = formatted.slice(0, 5) + ':' + cleaned.slice(4);
    }

    return formatted;
}

export default function InputText({ 
    label, 
    placeholder, 
    secureTextEntry = false,
    value,
    onChangeText
} : InputProps) : JSX.Element {
  const handleTextChange = (text: string) => {
    const formatted = formatTimeInput(text);
    if (onChangeText) {
        onChangeText(formatted);
    }
  };

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
            onChangeText={handleTextChange}
        />
    </FormControl>
  );
}
