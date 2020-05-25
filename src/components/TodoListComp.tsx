import React, { FC, useState } from 'react';
import { Text, Button, ImageBackground, View } from 'react-native';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';
import { deleteFromTodoList } from '../actions/todoListActions';

import { ISingleElementList } from '../entitiens/todoSingleEl';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';

const Warpper = styled.ScrollView`
  margin: 80px 20px 0 20px;
`;
const SingleElList = styled.View`
  border: 1px solid black;
  margin: 0 0 20px 0;
`;

type DeleteFromTodoList = ReturnType<typeof deleteFromTodoList>;

const TodoListComp: FC<{ switchView(formView: boolean) }> = (props) => {
  const todoListState = useSelector<IState, ITodoListReducer>((state) => state.TodoListComp);
  const dispatch = useDispatch();
  const goToForm = () => {
    props.switchView(true);
  };
  const clear = (id: number) => {
    dispatch<DeleteFromTodoList>(deleteFromTodoList(id));
  };

  return (
    <Warpper>
      {todoListState.TodoListComp.map((elem: ISingleElementList, index: number) => (
        <SingleElList key={index}>
          <Text>{elem.name}</Text>
          <Text>{elem.description}</Text>
          <Button title="usuń" onPress={() => clear(elem.id)} />
        </SingleElList>
      ))}

      <Button title="Dodaj nowy" onPress={goToForm} color="green" />
    </Warpper>
  );
};
console.log();
export default TodoListComp;
