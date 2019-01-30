import {SAVE_NAME} from '../actions/types';


export default function saveName(newname)
{
    console.log("rendering2");
   // const newname='';
    return function(dispatch)

    {
      dispatch({
      type:SAVE_NAME,
      payload:newname});
    }
   
}