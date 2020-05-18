import { combineReducers } from 'redux';

import TodoListComp, { ITodoListReducer } from './todoListReducer';

export default combineReducers({
  TodoListComp,
});

export interface IState {
  TodoListComp: ITodoListReducer;
}
