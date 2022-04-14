//.jsでも使えるが、.jsxにしておくとコンポーネントとして分かりやすい
//コンポーネント名は必ず先頭を大文字から初める
//パスカルケース(先頭大文字＋単語区切り大文字)で命名
//例）SomeComponent
import React from "react";

const App = () => {
  const onClickButton = () => alert();
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
      <button onClick={onClickButton}>ボタン</button>
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
  );
};

export default App;
