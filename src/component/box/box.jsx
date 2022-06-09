import React from "react";
import "./box.css";
const Box = (props) => {
  return (
    <div className={`box ${props.result} ${props.computerResult}`}>
      <h1 className="title">{props.title}</h1>
      <img className="item-img" src={props.item && props.item.img}></img>
      <h2 className="title">
        {props.result}
        {props.computerResult}
      </h2>
    </div>
  );
};

export default Box;
