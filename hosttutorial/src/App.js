import React, { Component } from "react";
import Responsive from "./components/responsiveTutorial/Responsive";
//import styles from "./components/responsiveTutorial/styles.css";

import Customers from "./components/customers/Customers";

class App extends Component {
  render() {
    return (
      <div>
        <Customers />
      </div>
    );
  }
}

export default App;
