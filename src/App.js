import { useState } from "react";
import "./App.css";
import Box from "./component/Box";

// 1. 유저는 박스 두개를 볼 수 있다.(타이틀, 사진, 결과).
// 2. 유저는 박스 하단에 가위바위보 버튼을 볼 수 있다.
// 3. 버튼을 클릭하면 클릭한 아이템이 유저 박스에 보인다.
// 4. 버튼을 클릭하면 컴퓨터 아이템은 랜덤하게 선택이 된다.
// 5. 3번 4번의 아이템을 가지고 누가 이겼는지 승패를 나눈다.
// 6. 박스 테두리가 결과에 따라 색이 변한다. 지면 빨간색, 이기면 초록색, 비기면 검정색이 보인다.

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

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState(null);

  const play = (userChoice) => {
    console.log("user 선택됨", choice[userChoice].name);
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    console.log("computer 선택됨", computerChoice.name);
    setComputerSelect(computerChoice);

    console.log(
      "결과 : ",
      gameResut(choice[userChoice].name, computerChoice.name)
    );
    setResult(gameResut(choice[userChoice].name, computerChoice.name));
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice); // 객체의 키 값만 뽑아서 array로 만들어 줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const gameResut = (userChoice, computerChoice) => {
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

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
