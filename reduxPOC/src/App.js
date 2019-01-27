import React, { Component } from 'react';
import Posts from './components/Posts';
import './App.css';
import {Provider} from 'react-redux';
import store from './store';
import Postform from './components/Postform';


class App extends Component {
 
  render() {
   const style={
     color:'white',
     backgroundColor:'green',
     textAlign:'center'
   }
    return (
      <Provider store={store}>
      <div>
       <h1 style={style}>Welcome to Redux Learning!!!</h1>
       <Postform/>
       <hr/>
       <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
