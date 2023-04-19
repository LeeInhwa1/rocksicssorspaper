import React, { Component } from 'react'

export default class BoxClass extends Component {
  colorResult = () => {
    if (this.props.result === "tie") {
      return "tie";
    } else if (this.props.title === "Computer" && this.props.result === "lose") {
      return "win";
    } else if (this.props.title === "Computer" && this.props.result === "win") {
      return "lose";
    } else {
      return this.props.result;
    }
    
  };

  render() {
    return (
      <div className={`box ${this.colorResult()}`}>
        <h1>{this.props.title}</h1>
        <img
          className="item-img"
          src={this.props.item && this.props.item.img} // props 데이터에서 받아오는 데이터가 null 인 경우를 판별
          alt=""
        />
        <h2>{this.colorResult()}</h2>
      </div>
    );
  }
}
