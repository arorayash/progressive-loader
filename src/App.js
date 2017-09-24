import React, { Component } from 'react';
import './App.css';

import ProgressiveLoader from "./Components/ProgressiveLoader";

class App extends Component {
  render() {
    return (
      <div className="App">
        <ProgressiveLoader></ProgressiveLoader>
      </div>
    );
  }
}

export default App;
