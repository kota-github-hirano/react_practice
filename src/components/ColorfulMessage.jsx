import React from "react";

//const ColorfulMessage = (props) => {
export const ColorfulMessage = (props) => {
  //普通のexportをよく使う
  //console.log("からふる");
  //console.log(props);
  const { color, children } = props; //propsから要素を分割代入
  const contentLadyStyle = {
    //color: props.color,
    //color: color,
    color, //同じ名前の場合省略可能
    fontSize: "18px"
  };
  //↓<ColorfulMessage color="pink" message="お元気です" />でpropsを渡す場合
  //return <p style={contentLadyStyle}>{props.message}</p>;
  //↓<ColorfulMessage color="black">風邪です</ColorfulMessage>でpropsを渡す場合
  //return <p style={contentLadyStyle}>{props.children}</p>;
  return <p style={contentLadyStyle}>{children}</p>;
};

//export default ColorfulMessage;　//デフォルトexportはタイプミスにつながる
