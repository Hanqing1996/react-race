import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class App extends React.Component {
  constructor() {
    super()
    // 以下为需要更新的量
    this.state = {
      rabbitTime: 0,
      tortoiseTime: 0
    }
    // 以下为不变的量
    this.t0 = new Date()
    this.success1 = () => {
      console.log('兔子跑完了');
      this.setState({
        rabbitTime: new Date() - this.t0
      })
    }
    this.success2 = () => {
      console.log('乌龟跑完了');
      this.setState({
        tortoiseTime: new Date() - this.t0
      })
    }
  }
  render() {
    return (
      <div >
        <div className="header">
          <Time1 spend={this.state.rabbitTime} />
          <Judge />
          <Time2 spend={this.state.tortoiseTime} />
        </div>
        <Track1 success={this.success1} />
        <Track2 success={this.success2} />
      </div>
    )
  }
}


function Time1(props) {
  return (
    <div>
      <h2>🐇{parseInt(props.spend/1000)}秒</h2>
      <div>0</div>
    </div>
  )
}

function Time2(props) {
  return (
    <div>
      <h2>🐢{parseInt(props.spend/1000)}秒</h2>
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
  constructor(props) {
    super()

    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }

    let timerId = setInterval(() => {
      n += 10
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timerId)
        props.success()
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
  constructor(props) {
    super()

    let n = 0
    this.state = {
      style: {
        transform: `translateX(${n}%)`
      }
    }

    let timerId = setInterval(() => {
      n += 5
      this.setState({
        style: {
          transform: `translateX(${n}%)`
        }
      })
      if (n >= 100) {
        window.clearInterval(timerId)
        props.success()
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
