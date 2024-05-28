import { MaterialIcons } from "@expo/vector-icons";
import { VStack, Text, Input, ScrollView, Box, Icon, Button, Divider } from "native-base";
import Title from "../components/Title";
import { CardScheduling } from "../components/CardScheduling";
import { useEffect, useState } from "react";
import { getEmployeeByName, listEmployee, Employee } from "../services/EmployeeService";

export default function Explore({ navigation }: { navigation: any }) {
    const [employeeList, setEmployeeList] = useState<Employee[]>([]);
    const [name, setName] = useState<string>('');
    const [searchResult, setSearchResult] = useState<Employee[]>([]);

    async function searchEmployee() {
        if (!name.trim()) {
            setSearchResult([]);
            return;
        }
        const result = await getEmployeeByName(name);
        setSearchResult(result);
    }

    useEffect(() => {
        async function listEmployees() {
            const result = await listEmployee();
            setEmployeeList(result);
        }
        listEmployees();
    }, []);

    useEffect(() => {
        console.log(searchResult);
    }, [searchResult]);

    return (
        <VStack>
            <Title>Busca de Cabeleireiros</Title>
            <Box>
                <Input
                    value={name}
                    bgColor='gray.100'
                    shadow={1}
                    borderRadius="lg"
                    padding={3.5}
                    mt={8}
                    mx={3}
                    size={"lg"}
                    placeholder="Digite o nome do cabeleireiro"
                    InputRightElement={<Icon as={<MaterialIcons name="search" />} size={19} mr="5" color="muted.400" />}
                    onChangeText={setName}
                />
                <Button
                    _pressed={{ bg: 'gray.700' }}
                    w='70%'
                    alignSelf={"center"}
                    bg='brown'
                    mt={8}
                    onPress={searchEmployee}
                >
                    Buscar
                </Button>
            </Box>
            <Divider mt={5} />
            <Box mb={20}>
                <ScrollView p={5} mb={400}>
                    {searchResult.length > 0 ? (
                        searchResult.map((employee: Employee) => (
                            <CardScheduling
                                key={employee.id}
                                name={employee.name}
                                evaluation={employee.evaluation}
                            />
                        ))
                    ) : (
                        employeeList.map((employee: Employee) => (
                            <CardScheduling
                                key={employee.id}
                                name={employee.name}
                                evaluation={employee.evaluation}
                            />
                        ))
                    )}
                </ScrollView>
            </Box>
        </VStack>
    );
}
