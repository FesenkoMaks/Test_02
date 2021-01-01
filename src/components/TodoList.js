import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTaskAC,
  removeTaskAC,
  changeTaskStatusAC,
} from "../store/todolistReducer";
import AddNewTask from "./AddNewTask";
import Tasks from "./Tasks";
import style from "./TodoList.module.scss";

const TodoList = () => {
  const tasks = useSelector((state) => state.todolist);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  const changeInputValue = (event) => {
    setValue(event.target.value);
  };

  const changeTaskStatus = (id, isDone) => {
    dispatch(changeTaskStatusAC(id, !isDone));
  };

  const removeTask = (id) => {
    dispatch(removeTaskAC(id));
  };

  const addNewTask = () => {
    let a = value.trim();
    if (a) {
      dispatch(addTaskAC(a));
    }

    setValue("");
  };

  return (
    <div className={style.todo}>
      <AddNewTask
        value={value}
        changeInputValue={changeInputValue}
        addNewTask={addNewTask}
      />
      <Tasks
        tasks={tasks}
        removeTask={removeTask}
        changeTaskStatus={changeTaskStatus}
      />
    </div>
  );
};

export default TodoList;
