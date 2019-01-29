import React, { Component } from 'react';
// import {BrowserRouter as Router} from 'react-router-dom';
// import {Route} from 'react-router-dom';
// import ThirdPage from './thirdPage';
// import { Redirect } from 'react-router-dom'
class Secondpage extends Component{
 
    state={
        name:'',
      
    }
    handleChange=(e)=>
    {
        this.setState({name:e.target.value});
    }
    handleSubmit=()=>
    {
    

    }
   
    render()
    {
        const style={color:'white',backgroundColor:'green',textAlign:'center' }
        
        return(
            <div>

                <h1>Secondpage</h1>
                <p>UserName : <input type="text" onChange={this.handleChange.bind(this)}></input></p>
                <br/>
                <button type="submit" style={style} onClick={this.handleSubmit.bind(this)}>Go!!</button>
            
                
            </div>
           
        )
    }

}

export default Secondpage;