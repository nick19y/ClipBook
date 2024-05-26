import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";
interface TitleProps extends ITextProps{
    children: ReactNode
}
export default function Title({children, ...rest}: TitleProps){
    return(
        <Text fontSize="2xl" alignSelf={"center"} fontWeight="bold" color="gray.500" mt={6} {...rest}>{children}</Text>
    )
}