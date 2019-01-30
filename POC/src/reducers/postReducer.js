import {SAVE_NAME,FETCH_POSTS,SHOW_DETAILS} from '../actions/types';

const intialState={
    name:'',
    items:[],
    item:{}
}

export default function(state=intialState,action)
{
    switch(action.type)
    {
        case SAVE_NAME: 
        return{
        ...state,
        name:action.payload
        };
                            
        case FETCH_POSTS: 
        return{
        ...state,
        items:action.payload
        };
 
        case SHOW_DETAILS: 
        return{
        ...state,
        item:action.payload
        };
        
        default: return state;
    }
}
