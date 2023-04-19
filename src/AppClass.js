import React, { Component } from "react";
import BoxClass from "./component/BoxClass";

const choice = {
  rock: {
    name: "Rock",
    img: "https://png.pngtree.com/png-clipart/20210228/ourmid/pngtree-beautiful-rock-in-the-river-png-png-image_2977572.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://png.pngtree.com/png-vector/20190227/ourmid/pngtree-vector-scissor-icon-png-image_707338.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvhP78sXiNm7SHE6xANLNfHek0xjeRfeUeI71hsXTJhg&s",
  },
};

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "",
      userSelect: "",
      computerSelect: "",
    };
  }

  play = (userChoice) => {
    let computerChoice = this.randomChoice();
    this.setState({
      userSelect: choice[userChoice],
      computerSelect: computerChoice,
      result: this.gameResut(choice[userChoice].name, computerChoice.name),
    });
  };

  randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키 값만 뽑아서 array로 만들어 줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  gameResut = (userChoice, computerChoice) => {
    console.log("userChoice", userChoice);
    console.log("computerChoice", computerChoice);
    if (userChoice === computerChoice) {
      return "tie";
    } else if (
      (userChoice === "Sicissors" && computerChoice === "Paper") ||
      (userChoice === "Paper" && computerChoice === "Rock") ||
      (userChoice === "Rock" && computerChoice === "Sicissors")
    ) {
      return "win";
    } else {
      return "lose";
    }
  };

  render() {
    return (
      <div>
        <div className="main">
          <BoxClass
            title="You"
            item={this.state.userSelect}
            result={this.state.result}
          />
          <BoxClass
            title="Computer"
            item={this.state.computerSelect}
            result={this.state.result}
          />
        </div>
        <div className="main">
          <button onClick={() => this.play("scissors")}>가위</button>
          <button onClick={() => this.play("rock")}>바위</button>
          <button onClick={() => this.play("paper")}>보</button>
        </div>
      </div>
    );
  }
}
