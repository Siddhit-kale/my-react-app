import React, { Component } from 'react';

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentTime: new Date(),
    };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      currentTime: new Date(),
    });
  }

  render() {
    const formattedTime = this.state.currentTime.toLocaleTimeString();
    const formattedDate = this.state.currentTime.toLocaleDateString();

    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Welcome From {this.props.deptName}</h1>
        <h2>Current Date: {formattedDate}</h2>
        <h2>Current Time: {formattedTime}</h2>
      </div>
    );
  }
}

export default Welcome;
