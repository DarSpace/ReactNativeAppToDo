import * as actionTypes from './types/todolistTypes';
import { ISingleElementList } from '../entitiens/todoSingleEl';

export const setNewElemTodoList = (newElem: ISingleElementList) => ({
  type: actionTypes.SET_NEW_ELEM,
  newElem,
});

export const deleteFromTodoList = (elemId: number) => ({
  type: actionTypes.DELETE_ELEM,
  elemId,
});
