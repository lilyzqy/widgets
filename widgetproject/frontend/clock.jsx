import React from 'react';

class Clock extends React.Component {
  constructor(){
    super();
    this.state = {
      time: new Date()
    };
  }

  componentDidMount(){
    this.intervalId = setInterval(this.tick.bind(this),1000);
  }

 componentWillUnmount(){
   clearInterval(this.intervalId);
 }

  tick(){
    this.setState({ time : new Date()});
  }

  render(){
    let hours = this.state.time.getHours();
    let minutes = this.state.time.getMinutes();
    let seconds = this.state.time.getSeconds();

    hours = (hours < 10) ? `0${hours}` : hours;
    minutes = (minutes < 10) ? `0${minutes}` : minutes;
    seconds = (seconds < 10) ? `0${seconds}` : seconds;

    return (
      <h1 className= "clock">{`${hours}:${minutes}:${seconds}`}</h1>
    );
  }
}

export default Clock;
