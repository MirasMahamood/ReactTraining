import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Router from "./Router";

class App extends Component {
  render() {
    return (
      <main className="main">
        <Header />
        <Menu />
        <Router />
      </main>
    );
  }
}

export default App;
