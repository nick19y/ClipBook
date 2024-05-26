import React from "react";

import RegisterUser from "./RegisterUser";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Tabs from "./Tabs";


const Tab = createNativeStackNavigator();

export default function Routes(){
    return(
        <Tab.Navigator>
            <Tab.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Tab.Screen name="RegisterUser" component={RegisterUser} options={{headerShown:false}}/>
            <Tab.Screen name="Tabs" component={Tabs} options={{headerShown:false}}/>
        </Tab.Navigator>
    )
}