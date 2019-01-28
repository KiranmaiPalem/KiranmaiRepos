import {FETCH_POSTS} from './types';

export default function fetchPosts()
{
    return function(dispatch)
    {
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res=>res.json())
      .then(posts=>dispatch({
        type:FETCH_POSTS,
        payload:posts
      }));
    }
}

