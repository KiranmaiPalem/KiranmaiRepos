import React, { Component } from 'react';
import showDetails from '../actions/showDetails';

import {connect} from 'react-redux';

class Thirdpage extends Component{
    state={
        data:'',
        name1:''
    }
 
    componentWillReceiveProps(nextProps)
    {
        if(nextProps.name)
        {
            this.setState({name1:nextProps.name})
          
        } 
        
    }
    handleChange=(e)=>
    {
        e.preventDefault();
        this.setState({data:e.target.value});

    }
    handleClick=(e)=>
    {
        e.preventDefault();
        this.props.showDetails(this.state.data);
        console.log( this.props.item);
    }
    render()
    {
        const style={color:'white',backgroundColor:'green',textAlign:'center' };
       
        const postItems=this.props.posts.map(post=>(
            post.id===1?
            (<div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>) : null
        ));
        
        return(
            
            <div>
                <h1>ThirdPage</h1>
                <h2>{this.state.name1} always be happy!!!</h2>
                {postItems}
                 <p>Enter the text:<input type="text" onChange={this.handleChange.bind(this)} name="data"></input></p>
                <button type="submit" style={style} onClick={this.handleClick.bind(this)}>Go!!</button>
                {/* <h3>{this.props.item}</h3> */}
               
            </div>
            
           
        )
    }

}
const mapStateToProps=state=>
(
  {
    posts:state.posts.items,
    name:state.posts.name,
    item:state.posts.item
  }
);

export default connect(mapStateToProps,{showDetails})(Thirdpage);