import * as actionTypes from '../actions/types/todolistTypes';
import { ISingleElementList } from '../entitiens/todoSingleEl';

export interface ITodoListReducer {
  TodoListComp: ISingleElementList[];
}

const defaultState = (): ITodoListReducer => ({
  TodoListComp: [
    {
      name: 'Pierwszy',
      description: 'Pierwszy description',
      id: 1,
    },
    {
      name: 'Drugi',
      description: 'Drugi description',
      id: 2,
    },
  ],
});

export default (state = defaultState(), action: any): ITodoListReducer => {
  switch (action.type) {
    case actionTypes.SET_NEW_ELEM: {
      return {
        ...state,
        TodoListComp: [...state.TodoListComp, action.newElem],
      };
    }
    default: {
      return state;
    }
  }
};
