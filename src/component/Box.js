import React from "react";

const Box = (props) => {
  console.log(props);
  const colorResult = () => {
    if (props.result === "tie") {
      return "tie";
    } else if (props.title === "Computer" && props.result === "lose") {
      return "win";
    } else if (props.title === "Computer" && props.result === "win") {
      return "lose";
    } else {
      return props.result;
    }
  };

  return (
    <div className={`box ${colorResult()}`}>
      <h1>{props.title}</h1>
      <img
        className="item-img"
        src={props.item && props.item.img} // props 데이터에서 받아오는 데이터가 null 인 경우를 판별
        alt=""
      />{" "}
      <h2>{colorResult()}</h2>
    </div>
  );
};

export default Box;
