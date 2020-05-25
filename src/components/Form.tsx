import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { TextInput, Button } from 'react-native';

import { useDispatch } from 'react-redux';

import { setNewElemTodoList } from '../actions/todoListActions';
import { ISingleElementList } from '../entitiens/todoSingleEl';

const Warpper = styled.View`
  margin: 80px 20px 0 20px;
`;
const CustomTextInput = styled.TextInput`
  border: 1px solid;
  padding: 10px;
  color: black;
  width: 100%;
`;

type SetNewElemTodoList = ReturnType<typeof setNewElemTodoList>;

const Form: FC<{ switchView(formView: boolean) }> = (props) => {
  const dispatch = useDispatch();
  const [nameInput, setNameInput] = useState<string>('');
  const [descInput, setDescrInput] = useState<string>('');

  const nameValueChange = (txt) => {
    setNameInput(txt.nativeEvent.text);
  };

  const descriptionValueChange = (txt) => {
    setDescrInput(txt.nativeEvent.text);
  };

  const saveData = () => {
    dispatch<SetNewElemTodoList>(
      setNewElemTodoList({
        name: nameInput,
        description: descInput,
        id: new Date().getTime(),
      } as ISingleElementList),
    );
    props.switchView(false);
  };

  return (
    <Warpper>
      <CustomTextInput value={nameInput} onChange={nameValueChange} placeholder="Name" />

      <CustomTextInput value={descInput} onChange={descriptionValueChange} placeholder="Description" />

      <Button title="Zapisz" onPress={saveData} />
    </Warpper>
  );
};
export default Form;
