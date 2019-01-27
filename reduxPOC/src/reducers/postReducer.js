import {FETCH_POST, NEW_POST, FETCH_POSTS} from '../actions/types';


const intialState={
    items:[],
    item:{}
}

export default function(state=intialState,action)
{
    switch(action.type)
    {
        case FETCH_POSTS:
        return {
            ...state,
            items:action.payload
        };
        case NEW_POST:
        return{
            ...state,
            item:action.payload
        };

        default :
        return state;
    }
}