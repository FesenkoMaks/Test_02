import React from "react";
import style from "./AddNewTask.module.scss";

const AddNewTask = (props) => {
  return (
    <div className={style.new}>
      <input value={props.value} onChange={props.changeInputValue}></input>
      <button onClick={props.addNewTask}>+</button>
    </div>
  );
};

export default AddNewTask;
