import React, { useState } from "react";
import style from "./Tasks.module.scss";

const Tasks = (props) => {
  return (
    <div className={style.task}>
      {props.tasks.map((task) => (
        <div className={style.item} key={task.id}>
          <input
            type="checkbox"
            checked={task.isDone}
            onChange={() => props.changeTaskStatus(task.id, task.isDone)}
          ></input>
          {task.title}
          <button onClick={() => props.removeTask(task.id)}>X</button>
        </div>
      ))}
    </div>
  );
};

export default Tasks;
