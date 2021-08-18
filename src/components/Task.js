import React from "react";

const Task = (props) => {
  const style = {
    color: "#FF485C",
    fontWeight: "700",
  };

  const { text, date, active, important, finishDate } = props.task;

  if (active) {
    return (
      <div className="active_task">
        <span style={important ? style : null}>
          {text} <span className="active_date">{date}</span>
        </span>
        <div className="active_buttons">
          <div
            onClick={() => [
              props.updateActive(props._id),
              window.location.reload(false),
            ]}
          >
            Done
          </div>
          <div
            onClick={() => [
              props.deleteDB(props._id),
              window.location.reload(false),
            ]}
          >
            Remove
          </div>
        </div>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toISOString().slice(0, 10);
    return (
      <div className="done_task">
        <p>
          <span>{text}</span>
          <span className="finish_date">{finish}</span>
          <div
            className="done_btn"
            onClick={() => [
              props.deleteDB(props._id),
              window.location.reload(false),
            ]}
          >
            Remove
          </div>
        </p>
      </div>
    );
  }
};

export default Task;
