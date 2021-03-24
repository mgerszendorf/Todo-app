import React, { Component } from "react";

class Clock extends Component {
  state = {
    time: new Date(),
  };

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      time: new Date(),
    });
  }

  changeWelcomeTxt = () => {
    let welcome = "";
    if (this.state.time.getHours() < 12) {
      welcome = "Good morning,";
    } else if (
      this.state.time.getHours() > 12 &&
      this.state.time.getHours() < 18
    ) {
      welcome = "Good afternoon,";
    } else if (this.state.time.getHours() > 18) {
      welcome = "Good evening,";
    }
    return welcome;
  };

  render() {
    return (
      <div className="time">
        <div className="welcome_txt">
          <h1>{this.changeWelcomeTxt()}</h1>
        </div>
        <p>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Clock;
