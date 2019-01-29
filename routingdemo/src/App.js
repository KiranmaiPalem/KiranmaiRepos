import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import FirstPage from './components/firstPage';
// import SecondPage from './components/secondPage';
// import ThirdPage from './components/thirdPage';

class App extends Component {
  render() {
    const style={
      color:'white',
      backgroundColor:'#e91e63',
      textAlign:'center'
    }
    return (
      <Provider store={store}>
      <div className="App">
        <h1 style={style}>Welcome to Redux!!!</h1>
        <FirstPage/>
        {/* <SecondPage/>
        <ThirdPage/> */}
      </div>
      </Provider>
    );
  }
}

export default App;
