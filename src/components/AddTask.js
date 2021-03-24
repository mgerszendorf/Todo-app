import React, { Component } from "react";

class AddTask extends Component {
  state = {
    text: "",
    checked: false,
    date: new Date().toISOString().slice(0, 10),
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

  handleClick = () => {
    const { text, date, checked } = this.state;
    if (text.length > 2) {
      const add = this.props.add(text, date, checked);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: new Date().toISOString().slice(0, 10),
        });
      }
    } else {
      alert("Please enter a task longer than 2 characters");
    }
  };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <form className="form" onSubmit={this.onFormSubmit}>
        <input
          className="add_task"
          type="text"
          placeholder="Add task..."
          onFocus={(e) => (e.target.placeholder = "")}
          onBlur={(e) => (e.target.placeholder = "Add task...")}
          value={this.state.text}
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
    );
  }
}

export default AddTask;
