import React, { Component } from 'react';
import './App.css';
import FirstPage from './components/Firstpage';
import {BrowseRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom';
import ReduxDemo from './components/Reducer'
class App extends Component {
  render() {
    const styles={
      color:"white",
      backgroundColor:"green"
    }
    return (
      <div className="App">
       <h1 style={styles}>Leave a Little Sparkle Where Ever You Go...</h1>
       <FirstPage/>
       <ReduxDemo/>
      </div>
    );
  }
}

export default App;
