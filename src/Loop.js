import React, { Component } from "react";

let timer = 0,
  timerId = 0;
class Loop extends Component {
  componentWillMount() {
    timer = this.props.timer;
  }

  componentDidMount() {
    timerId = setTimeout(this.reduceTime, 1000);
  }

  reduceTime = () => {
    if (timer > 0) {
      timer -= 0.5;
      console.log(timer);
      timerId = setTimeout(this.reduceTime, 1000);
    } else {
      clearTimeout(timerId);
    }
  };

  render() {
    return <div />;
  }
}

export default Loop;
