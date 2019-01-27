import React,{Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import createPost from '../actions/postAction';
import ReactDOM from 'react-dom';
import "../App.css"
class Postform extends Component
{
    constructor(props)
    {
      super(props);
      this.state={
       title:'',
       body:''
      }
     
    }
    handleChange=(e)=>
    {
        this.setState({ [e.target.name]:e.target.value })
    }
    handleSubmit=(e)=>
    {
        e.preventDefault();
        const post={
            title:this.state.title,
            body:this.state.body
        }
       
        this.props.createPost(post);
    }
    
    render() 
    {
     return (
        <div className="App">
        <h1>Add Post:</h1>
        <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
                <label>Title :</label><br/>
                <input type="text" name="title" value={this.state.title} onChange={this.handleChange.bind(this)}/>
            </div>
            <br/>
            <div>
                <label>Body :</label><br/>
                <textarea name="body" value={this.state.body} onChange={this.handleChange.bind(this)} />
            </div>
            <br/>
            <button type="submit">Submit</button>
        </form>
        </div>
        )
    } 
}
const mapStateToProps=state=>
(
  {
    post:state.posts.item
  }
);
Postform.propTypes=
{
    createPost:PropTypes.func.isRequired

};

export default connect(mapStateToProps,{createPost})(Postform);