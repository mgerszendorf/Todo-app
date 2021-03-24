import React from "react";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) return 1;
      if (a.finishDate > b.finishDate) return -1;
      return 0;
    });
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      if (a < b) return -1;
      if (a > b) return 1;
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <>
      <div className="active">
        <p>Tasks to be done:</p>
        {activeTasks.length > 0 ? activeTasks : <p>You have free time</p>}
      </div>
      <div className="done">
        <p>Tasks done: {done.length}</p>
        {done.length > 5 && <p>The last 5 tasks have been displayed</p>}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
