import React, { FC } from 'react';
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

import ButtomTabs from '@react-navigation/native'
import 'react-native-gesture-handler';



interface IMainProps { }

const Main: FC<IMainProps> = props => {
    return (

        <View><Text>Main Screen</Text></View>

    )

}

export default Main; 
