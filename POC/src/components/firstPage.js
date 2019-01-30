import React, { Component } from 'react';
//import fetchPosts from '../actions/fetchPosts';
import saveName from '../actions/saveName';
import {connect} from 'react-redux';

class FirstPage extends Component{
 
    state={
        name1:'',
      }
    
    
    handleChange=(e)=>
    {
        this.setState({name1:e.target.value});
    }
    handleSubmit=()=>
    {
        console.log("working2");
        const name1=this.state.name1;
        this.props.saveName(name1);
    }
 
    render()
    {
        const style={color:'white',backgroundColor:'green',textAlign:'center' };
       // const showname=this.props.name;
       
        return(
      
            <div>
                <h1>FirstPage</h1>
                <p>UserName : <input type="text" onChange={this.handleChange.bind(this)}></input></p>
                <br/>
                <button type="submit" style={style} onClick={this.handleSubmit.bind(this)}>Go!!</button>
               <br/>
               {/* <p>Entered name is : {showname}</p> */}
                
            </div>
            
           
        )
    }

}
const mapStateToProps=state=>
(
  {
    name:state.posts.name
  }
);

export default connect(mapStateToProps,{saveName})(FirstPage);