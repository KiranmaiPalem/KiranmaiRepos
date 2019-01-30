import {SHOW_DETAILS} from '../actions/types';

export default function showDetails(data)
{
    console.log("rendering3");
   // const newname='';
    return function(dispatch)

    {
      dispatch({
      type:SHOW_DETAILS,
      payload:data});
    }
   
}