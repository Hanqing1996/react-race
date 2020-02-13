import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function App() {
  return (
    <div >
      <div className="header">
        <Time1/>
        <Judge/>
        <Time2/>
      </div>
      <Track1/>
      <Track2/>
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

function Track1() {
  return (
    <div>
      <div>🐇</div>
      <div className="track"></div>
    </div>
  )
}

function Track2() {
  return (
    <div>
      <div>🐢</div>
      <div className="track"></div>
    </div>
  )
}



// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
