import React from 'react';
import { Provider } from 'react-redux';
import * as Contacts from 'expo-contacts';
import { Gyroscope } from 'expo-sensors';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons';



import ThirdScreen from './src/screens/ThirdScreen/ThirdScreen';
import ToDoList from './src/screens/ToDoList/ToDoList';
import Main from './src/screens/Main/Main';



const Tab = createBottomTabNavigator();
export default function App() {



    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Main" component={Main} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} />


                <Tab.Screen name="ToDoList" component={ToDoList} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="table-edit" color={color} size={size} />
                    ),
                }} />

                <Tab.Screen name="ThirdScreen" component={ThirdScreen} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="notebook" color={color} size={size} />
                    ),
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
