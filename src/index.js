import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div >
      <div className="header">
        <Time1 />
        <Judge />
        <Time2 />
      </div>
      <Track1 />
      <Track2 />
    </div>
  )
}

function Time1() {
  return (
    <div>
      <h2>🐇用时</h2>
      <div>0</div>
    </div>
  )
}

function Time2() {
  return (
    <div>
      <h2>🐢用时</h2>
      <div>0</div>
    </div>
  )
}

function Judge() {
  return (
    <div>裁判</div>
  )
}

class Track1 extends React.Component {
  constructor() {
    super()

    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }

    let timerId=setInterval(() => {
      console.log(n)
      n += 10
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n>=100){
        window.clearInterval(timerId)
      }
    }, 1000)
  }
  render() {
    return (
      <div>
        <div style={this.state.style} className="player">🐇</div>
        <div className="track"></div>
      </div>
    )
  }
}

class Track2 extends React.Component {
  constructor() {
    super()

    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }

    let timerId=setInterval(() => {
      n += 5
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if(n>=100){
        window.clearInterval(timerId)
      }

    }, 1000)
  }
  render() {
    return (
      <div>
        <div style={this.state.style} className="player">🐢</div>
        <div className="track"></div>
      </div>
    )
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
