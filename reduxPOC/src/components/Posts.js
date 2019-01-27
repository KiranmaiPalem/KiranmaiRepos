import React,{Component} from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import fetchPosts from '../actions/postAction';
import {connect} from 'react-redux';
import "../App.css"
class Posts extends Component
{
   componentWillMount()
   {
     this.props.fetchPosts();
   } 
    
    render() {
      const postItems=this.props.posts.map(post=>(
        <div key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
        </div>
      ))
      return (
        <div className="App">
         <h1>Posts</h1>
         {postItems}
        </div>)
} 
}
Posts.propTypes={
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.func.isRequired,
  newPost:PropTypes.object
}

const mapStateToProps=state=>
(
  {
    posts:state.posts.items,
    newPost:state.posts.item
  }
);

export default connect(mapStateToProps,{fetchPosts})(Posts);