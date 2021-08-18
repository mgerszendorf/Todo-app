import React, { Component } from "react";
import Axios from "axios";
import TaskList from "./TaskList";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
    active: true,
    newActive: false,
    finishDate: "",
    newFinishDate: new Date().toISOString().slice(0, 10),
  };

  deleteDB = (id) => {
    Axios.delete(`https://app-todoapp.herokuapp.com/delete/${id}`);
  };

  updateActive = (id) => {
    Axios.put(`https://app-todoapp.herokuapp.com/update`, {
      id: id,
      newActive: this.state.newActive,
      newFinishDate: this.state.newFinishDate,
    });
  };

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      this.props.add(text, date, checked);
    }
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleCheckbox = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  onFormSubmit = async (event) => {
    const todo = {
      active: this.state.active,
      date: this.state.date,
      finishDate: this.state.finishDate,
      important: this.state.checked,
      text: this.state.text,
    };

    await Axios.post(`https://app-todoapp.herokuapp.com/insert`, { todo });
  };

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onFormSubmit}>
          <input
            className="add_task"
            type="text"
            name="text"
            placeholder="Add task..."
            onFocus={(e) => (e.target.placeholder = "")}
            onBlur={(e) => (e.target.placeholder = "Add task...")}
            onChange={this.handleText}
          />

          <div className="priority">
            <input
              id="important"
              type="checkbox"
              checked={this.state.checked}
              onChange={this.handleCheckbox}
            />
            <label htmlFor="important">Important</label>
          </div>

          <input
            className="date"
            type="date"
            value={this.state.date}
            onChange={this.handleDate}
          />

          <button className="add_btn" onClick={this.handleClick}>
            Add
          </button>
        </form>
        <TaskList
          tasks={this.props.tasks}
          delete={this.props.delete}
          change={this.props.change}
          updateActive={this.updateActive}
          deleteDB={this.deleteDB}
          myId={this.props.myId}
        />
      </div>
    );
  }
}

export default AddTask;
