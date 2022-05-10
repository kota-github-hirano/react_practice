//.jsでも使えるが、.jsxにしておくとコンポーネントとして分かりやすい
//コンポーネント名は必ず先頭を大文字から初める
//パスカルケース(先頭大文字＋単語区切り大文字)で命名
//例）SomeComponent
import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickCountUp = () => {
    //alert();
    setNum(num + 1);
  };
  const [num, setNum] = useState(0); //[変数名,更新関数名]=useState(初期値)
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };

  return (
    // return内は一つのタグで囲まないとエラーとなる(入れ子は可能)
    // <div></div>
    // 何も入れたくない場合は以下のどちらか（意味は同じ）
    // <React.Fragment></React.Fragment>
    // <></>
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <ColorfulMessage color="pink" message="お元気です" />
      <ColorfulMessage color="black">風邪です</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ!</button>
      <p>{num}</p>
    </>
    //イベントの割り当て
    //キャメルケース(先頭小文字＋＋単語区切り大文字)={関数名}
    //{}:javascriptとして読まれる
    //
    //スタイルの当て方
    //キャメルケース
    //直接書く場合
    //style={{キャメルケース:"文字列"}},{外}:js書きます,{内}jsのオブジェクト
    //変数を使用する場合も同様
    //style={contentStyle}

    //props:コンポーネントに投げる変数（動的に変数を渡してcompornentをすっきりさせる）
    // <ColorfulMessage color="blue" message="お元気ですか？" />
    // <コンポーネント名 変数1=値1　変数2=値2>
  );
};

export default App;
