//.jsでも使えるが、.jsxにしておくとコンポーネントとして分かりやすい
//コンポーネント名は必ず先頭を大文字から初める
//パスカルケース(先頭大文字＋単語区切り大文字)で命名
//例）SomeComponent
import React from "react";

const App = () => {
  return (
    // return内は一つのタグで囲まないとエラーとなる(入れ子は可能)
    // <div></div>
    // 何も入れたくない場合は以下のどちらか（意味は同じ）
    // <React.Fragment></React.Fragment>
    // <></>
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

export default App;
