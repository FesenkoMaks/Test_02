import { combineReducers, createStore } from "redux";
import { getState } from "../state";
import { todolistReducer } from "./todolistReducer";

const rootReducer = combineReducers({
  todolist: todolistReducer,
});

let initialState;
getState.then((state) => (initialState = state));

const state = localStorage["reduxState"]
  ? JSON.parse(localStorage["reduxState"])
  : initialState;

export const store = createStore(rootReducer, state);

store.subscribe(() => {
  localStorage["reduxState"] = JSON.stringify(store.getState());
});
