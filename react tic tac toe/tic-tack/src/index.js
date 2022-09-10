import React from 'react';
import ReactDOM from 'react-dom';
import CSS from './index.css';
import JSX from './index.jsx';

ReactDOM.render(
  <>
    <div className="select-box">
        <header>Tic Tac Toe</header>
        <div className="title">Select Which You want to be?</div>
        <div className="option">
            <button className="playerX">Player (X)</button>
            <button className="playerO">Player (O)</button>
        </div>
    </div>
 
    <div className="play-board">
        <div className="details">
            <div className="players">
                <span className="Xturn">X's Trun</span>
                <span className="Oturn">O's Trun</span>
                <div className="slider"></div>
            </div>
        </div>
        <div className="play-area">
            <section>
                <span className="box1"></span>
                <span className="box2"></span>
                <span className="box3"></span>
            </section>
            <section>
                <span className="box4"></span>
                <span className="box5"></span>
                <span className="box6"></span>
            </section>
            <section>
                <span className="box7"></span>
                <span className="box8"></span>
                <span className="box9"></span>
            </section>
        </div>
    </div>

  
    <div className="result-box">
        <div className="won-text"></div>
        <div className="btn">
            <button>Replay</button>
        </div>
</div>
  </>, document.querySelector('#root')
);