import React, { Component } from "react";

import logo from "../assets/dice.png";
import f0 from "../assets/0.png";
import f1 from "../assets/1.png";
import f2 from "../assets/2.png";
import f3 from "../assets/3.png";
import f4 from "../assets/4.png";
import f5 from "../assets/5.png";
import f6 from "../assets/6.png";

export default class Game extends Component {
  state = {
    face: null,
    faceImg: f0,
    hiddenFace: Math.floor(Math.random() * 6) + 1,
    tryCounter: 0,
    isFinished: false,
  };

  roll = () => {
    let newValue = Math.floor(Math.random() * 6) + 1;
    let faceImg;
    switch (newValue) {
      case 1:
        faceImg = f1;
        break;
      case 2:
        faceImg = f2;
        break;
      case 3:
        faceImg = f3;
        break;
      case 4:
        faceImg = f4;
        break;
      case 5:
        faceImg = f5;
        break;
      case 6:
        faceImg = f6;
        break;
      default:
    }
    this.setState({
      face: newValue,
      faceImg: faceImg,
    });

    if (newValue === this.state.hiddenFace) {
      this.setState({
        isFinished: true,
        tryCounter: this.state.tryCounter + 1,
      });
    } else {
      this.setState({
        tryCounter: this.state.tryCounter + 1,
      });
    }
  };
  init = () => {
    this.setState({
      face: null,
      faceImg: f0,
      hiddenFace: Math.floor(Math.random() * 6) + 1,
      tryCounter: 0,
      isFinished: false,
    });
  };
  render() {
    return (
      <div className="game">
        <header>
          <img src={logo} alt={logo} />
          <h1>
            <div>Dice</div>
            <div> game</div>
          </h1>
        </header>
        <div>
          <span>tries count : </span> {this.state.tryCounter}
        </div>

        <img src={this.state.faceImg} alt="" className="face" />
        <div className="message">
          {this.state.isFinished ? "😀 you got it!" : "☹️ try again!"}
        </div>
        {!this.state.isFinished && (
          <button onClick={this.roll}>Roll dice</button>
        )}

        {this.state.isFinished && (
          <button onClick={this.init}>play again</button>
        )}
      </div>
    );
  }
}
