import React, { FC, useState } from 'react';
import { Text, Button } from 'react-native';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import { IState } from '../reducers';
import { ITodoListReducer } from '../reducers/todoListReducer';

import { ISingleElementList } from '../entitiens/todoSingleEl';

const Warpper = styled.View`
  margin: 80px 20px 0 20px;
`;
const SingleElList = styled.View`
  border: 1px solid black;
  margin: 0 0 20px 0;
`;

const TodoListComp: FC<{ switchView(formView: boolean) }> = (props) => {
  const todoListState = useSelector<IState, ITodoListReducer>((state) => state.TodoListComp);
  const goToForm = () => {
    props.switchView(true);
  };
  return (
    <Warpper>
      {todoListState.TodoListComp.map((elem: ISingleElementList, index: number) => (
        <SingleElList key={index}>
          <Text>{elem.name}</Text>
          <Text>{elem.description}</Text>
        </SingleElList>
      ))}

      <Button title="Dodaj nowy" onPress={goToForm} />
    </Warpper>
  );
};
export default TodoListComp;
