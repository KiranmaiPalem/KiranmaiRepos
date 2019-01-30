import React, { Component } from 'react';
import fetchPosts from '../actions/fetchPosts';

import {connect} from 'react-redux';

class Secondpage extends Component{
 
    state={
        name1:'',
        setgo:false
    }
    // componentWillMount()
    // {
    // console.log("working");
    // this.props.fetchPosts();
    // } 
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.name)
        {
            this.setState({name1:nextProps.name})
        }
    }
   
    handleSubmit=()=>
    {
        console.log("working");
        this.props.fetchPosts();
       
    }
 
    render()
    {
        const style={color:'white',backgroundColor:'green',textAlign:'center' };
        const postItems=this.props.posts.map(post=>(
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
      
        return(
      
            <div>
                <h1>SecondPage</h1>
                <p>Entered name is {this.state.name1}</p>
                <br/>
                <button type="submit" style={style} onClick={this.handleSubmit.bind(this)}>Go!!</button>
                
                {postItems}
           
            </div>
            
           
        )
    }

}
const mapStateToProps=state=>
(
  {
    posts:state.posts.items,
    name:state.posts.name
  }
);

export default connect(mapStateToProps,{fetchPosts})(Secondpage);