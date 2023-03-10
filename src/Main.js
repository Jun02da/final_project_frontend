import React from "react";
import "./css/Main.css";
import FirstFeed from "./FirstFeed";

class Main extends React.Component {
  render() {
    return (
      <>
        <main>
          <div className="wrapMain">
            <FirstFeed />
          </div>
        </main>
      </>
    );
  }
}

export default Main;
