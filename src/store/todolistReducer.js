import { v1 } from "uuid";
import { initialState } from "../state";

export const todolistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REMOVE-TASK": {
      return [...state.filter((task) => task.id !== action.taskId)];
    }
    case "ADD-TASK":
      return [
        ...state,
        {
          id: v1(),
          order: state.length > 0 ? state[state.length - 1].order + 1 : 1,
          title: action.title,
          isDone: false,
        },
      ];
    case "CHANGE-TASK-STATUS":
      return [
        ...state.map((task) =>
          task.id === action.taskId ? { ...task, isDone: action.isDone } : task
        ),
      ];

    default:
      return state;
  }
};

export const removeTaskAC = (taskId) => {
  return { type: "REMOVE-TASK", taskId };
};
export const addTaskAC = (title) => {
  return { type: "ADD-TASK", title };
};
export const changeTaskStatusAC = (taskId, isDone) => {
  return { type: "CHANGE-TASK-STATUS", taskId, isDone };
};
