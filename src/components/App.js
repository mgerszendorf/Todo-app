import React, { Component } from "react";
import AddTask from "./AddTask";
import Clock from "./Clock";
import "./App.css";
import Axios from "axios";

class App extends Component {
  state = {
    tasks: [],
  };

  componentDidMount() {
    let currentComponent = this;
    Axios.get("http://localhost:3001/read")
      .then((response) => {
        this.setState(response.data);

        currentComponent.setState({
          tasks: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  changeTaskStatus = (id) => {
    const tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <div className="App">
        <Clock />
        <AddTask tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
