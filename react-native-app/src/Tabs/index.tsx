import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Main from "./Main";
import Scheduling from "./Scheduling";
import { Ionicons } from "@expo/vector-icons";
import Explore from "./Explore";
import Profile from "./Profile";


const Tab = createBottomTabNavigator()

const screenOptions = {
    tabBarStyle:{
    backgroundColor: '#D2B48C',
    height: 60,
    padding:7
    },
    tabBarLabelStyle: {
        fontSize: 13,
        marginBottom: 5,
    },
    tabBarActiveTintColor:"#000", 
    tabBarInactiveTintColor:"#fff"
}

const tabs=[
    {
        name: 'Main',
        component: Main,
        icon:'home'
    },
    {
        name: 'Scheduling',
        component: Scheduling,
        icon:'calendar'
    },
    {
        name: 'Explore',
        component: Explore,
        icon:'search'
    },
    {
        name: 'Profile',
        component: Profile,
        icon:'person'
    }
]
export default function Tabs(){
    return(
        <Tab.Navigator screenOptions={screenOptions}>
        {tabs.map((tab)=>(
                <Tab.Screen key={tab.name} name={tab.name} component={tab.component} 
                options={{headerShown:false, tabBarIcon:({color, size})=>(
                <Ionicons name={tab.icon} color={color} size={size}/>)
            }}/>
            ))
        }
        </Tab.Navigator>
    )
}