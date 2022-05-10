/* eslint react-hooks/exhaustive-deps: off */

//.jsでも使えるが、.jsxにしておくとコンポーネントとして分かりやすい
//コンポーネント名は必ず先頭を大文字から初める
//パスカルケース(先頭大文字＋単語区切り大文字)で命名
//例）SomeComponent
import React, { useEffect, useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  //stateは頭に持ってきた方が見やすい
  const [num, setNum] = useState(0); //[変数名,更新関数名]=useState(初期値)
  const [faceShowFlag, setfaceShowFlag] = useState(false);
  const contentStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const onClickCountUp = () => {
    //alert();
    setNum(num + 1);
  };
  const onClickShowFlag = () => {
    //alert();
    setfaceShowFlag(!faceShowFlag); //現状の値に!でトグルができる
  };

  useEffect(() => {
    console.log("useeffect");
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]); //←関心を持たせる変数を記載
  //関心を持たせるかどうかは以下を記載
  //[]だと最初の1回だけ使用する
  //[num]だとnumの更新があった場合のみ再リダイレクトされる
  //以下警告はuseeffect内に使っているstateが関心を持たせる変数に指定されていない場合に出る
  //React Hook useEffect has a missing dependency: 'faceShowFlag'. Either include it or remove the dependency array. (react-hooks/exhaustive-deps)
  //  ファイル全体において除去したい場合：/* eslint ○○○: off */と先頭に記載
  //  次の一行において除去したい場合：// eslint-disable-next-line ○○○ と記載

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
      <br />
      <button onClick={onClickShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>( 'o')</p>}
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
