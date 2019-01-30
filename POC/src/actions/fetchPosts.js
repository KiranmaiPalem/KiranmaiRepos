import {FETCH_POSTS} from '../actions/types';

export default function fetchPosts()
{
    console.log("rendering");
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