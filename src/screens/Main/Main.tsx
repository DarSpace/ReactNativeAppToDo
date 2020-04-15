import React, { FC } from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import ButtomTabs from '@react-navigation/native';
import 'react-native-gesture-handler';

interface IMainProps {}

// <Image source={require("profile.png")} />;

const Main: FC<IMainProps> = (props) => {
  return (
    <View>
      <Text>Main Screen</Text>
    </View>
  );
};

export default Main;
