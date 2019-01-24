import React,{Component} from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component
{
    render()
    {
    const Reducer=function(state,action)
    {
        if(action.type==="Attack")
        {
            return action.payload;
        }
        if(action.type==="newattack")
        {
            return action.payload;
        }
        return state;
    }

    const store=createStore(Reducer,"Be Bold");

    store.subscribe(()=>
    {
        console.log("Store is now",store.getState());
    })

    store.dispatch({type:"Attack",payload:"Be Active"});
    store.dispatch({type:"newattack",payload:"Be Effective"});

    return (
        <div>
            Kiranmai Palem
        </div>
    )
} 

// render()
// {
//     return(
//         <div>Kiranmai</div>
//     )
// }
}
export default ReduxDemo;
