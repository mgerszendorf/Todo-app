import React from "react";

const Task = (props) => {
  const style = {
    color: "#FF485C",
    fontWeight: "700",
  };

  const { text, date, id, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="active_task">
        <span style={important ? style : null}>
          {text} <span className="active_date">{date}</span>
        </span>
        <div className="active_buttons">
          <div onClick={() => props.change(id)}>Done</div>
          <div onClick={() => props.delete(id)}>Remove</div>
        </div>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <div className="done_task">
        <p>
          <span>{text}</span>
          <span className="finish_date">{finish}</span>
          <div className="done_btn" onClick={() => props.delete(id)}>
            Remove
          </div>
        </p>
      </div>
    );
  }
};

export default Task;
