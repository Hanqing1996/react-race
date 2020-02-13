import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  let t0 = new Date()
  let rabbitTime = 120
  let tortoiseTime = 130

  let success1 = () => { console.log('兔子跑完了'); rabbitTime = new Date() - t0 }
  let success2 = () => { console.log('乌龟跑完了'); tortoiseTime = new Date() - t0 }

  return (
    <div >
      <div className="header">
        <Time1 spend={rabbitTime}/>
        <Judge />
        <Time2 spend={tortoiseTime}/>
      </div>
      <Track1 success={success1} />
      <Track2 success={success2} />
    </div>
  )
}

function Time1(props) {
  return (
    <div>
      <h2>🐇{props.spend}</h2>
      <div>0</div>
    </div>
  )
}

function Time2(props) {
  return (
    <div>
      <h2>🐢{props.spend}</h2>
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
