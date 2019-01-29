import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Route} from 'react-router-dom';
import SecondPage from './secondPage';
import { Redirect } from 'react-router-dom'
class Firstpage extends Component{
 
    state={
        name:'',
        setgo:false
    }
    handleChange=(e)=>
    {
        this.setState({name:e.target.value});
    }
    handleSubmit=()=>
    {
        console.log(this.state.setgo);
       this.setState({setgo:true})

    }
  
    render()
    {
        const style={color:'white',backgroundColor:'green',textAlign:'center' }
        if(this.state.setgo===true)
        {
            console.log("Working");
            return(
            <Redirect to='/dashboard'/>);
        }
        return(
          <Router>
            <div>
                <h1>Firstpage</h1>
                <p>UserName : <input type="text" onChange={this.handleChange.bind(this)}></input></p>
                <br/>
                <button type="submit" style={style} onClick={this.handleSubmit.bind(this)}>Go!!</button>
                <Route path="/dashboard" exact strict component={SecondPage}/>
            </div>
            </Router>
           
        )
    }

}

export default Firstpage;