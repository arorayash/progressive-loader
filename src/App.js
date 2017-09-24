import React, { Component } from 'react';
import './App.css';

import ProgressiveLoader from "./Components/ProgressiveLoader";

const imageURL = 'https://dl.dropboxusercontent.com/s/ibv5i4uj50o9o2l/mainImage.jpg?dl=1';
const placeholderHeight = "50vw";
const placeholderWidth = "50vh";

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-iron-image-container">
          <ProgressiveLoader placeholderHeight={placeholderHeight} placeholderWidth={placeholderWidth} srcLoaded={imageURL} />
        </div>
      </div>
    );
  }
}

export default App;
