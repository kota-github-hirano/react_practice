import React from "react"; //必須ではなくなった
import ReactDom from "react-dom"; //コンポーネントをHTMLに反映
import App from "./App";
/** コンポーネント済み
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
 */

//public/index.htmlの<div id="root"></div>に関数Appを反映
ReactDom.render(<App />, document.getElementById("root"));
