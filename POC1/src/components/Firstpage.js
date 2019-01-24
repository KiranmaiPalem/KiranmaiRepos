import React,{Component} from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
//import { browserHistory } from 'react-router';
import Route from 'react-router-dom/Route';
// import Secondpage from './Secondpage';

class Firstpage extends Component
{
    state=
    {
        username:''
    }
    handleChange=(event)=>
    {
        this.setState({username:event.target.value});
    }
    handleClicked=()=>
    {
        <Redirect to="/home"/> 
        console.log("Clicked");

    }
    render() {
      return (
          <div className="App">
          <BrowserRouter>
          <Route path='/home' exact render=
          {
            () =>
            {
           return <h1>Welcome Home</h1>
            }
          }/>
          </BrowserRouter>
          <input type="text" placeholder="Username" onChange={this.handleChange.bind(this)}/>
          <input type="button" value="Go!" onClick={this.handleClicked.bind(this)}/>
         
          </div>
        );
      }
}

export default Firstpage;