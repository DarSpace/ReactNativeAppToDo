import React, { FC, useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components';
import { NavigationContainer } from '@react-navigation/native';

import ButtomTabs from '@react-navigation/native';
import 'react-native-gesture-handler';

import Form from '../../components/Form';
import TodoListComp from '../../components/TodoListComp';

interface IMainProps {}

const ToDoList = ({ navigation }) => {
  const [formView, setFormView] = useState<boolean>(false);

  return <View>{formView ? <Form switchView={setFormView} /> : <TodoListComp switchView={setFormView} />}</View>;
};

export default ToDoList;
