import React, { FC } from 'react';
import { View, Text, Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import styled from 'styled-components/native';

import ButtomTabs from '@react-navigation/native';
import 'react-native-gesture-handler';
import { ScrollView } from 'react-native-gesture-handler';

interface IMainProps {}

const Main: FC<IMainProps> = (props) => {
  return (
    <ScrollView>
      <StatusBar />
      <View style={{ padding: 15 }}>
        <Image style={{ width: 100, height: 100, borderRadius: 50 }} source={require('../../assets/splashlogo.png')} />
        <Text style={{ fontSize: 18, textAlign: 'justify' }}>
          The Kaiser roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread
          roll, originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating
          from the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The
          Kaiser roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The Kaiser
          roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The Kaiser
          roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The Kaiser
          roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The Kaiser
          roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The Kaiser
          roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture. The Kaiser
          roll (Emperor roll, German: Kaisersemmel), also called a Vienna roll (Wiener Kaisersemmel; as made by hand also: Handsemmel, Slovene: kajzerica) or a hard roll, is a typically crusty round bread roll,
          originally from Austria. It is made from white flour, yeast, malt, water and salt, with the top side usually divided in a symmetric pattern of five segments, separated by curved superficial cuts radiating from
          the centre outwards or folded in a series of overlapping lobes resembling a crown. The crisp Kaisersemmel is a traditional Austrian food officially approved by the Federal Ministry of Agriculture.
        </Text>
      </View>
    </ScrollView>
  );
};

export default Main;
