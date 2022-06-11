import { ADD_TODO, TODO_LIST } from "../store/Action.Type";

export const AddTodo = (payload) => ({ type: ADD_TODO, payload });
export const todoList = (payload) => ({ type: TODO_LIST, payload });