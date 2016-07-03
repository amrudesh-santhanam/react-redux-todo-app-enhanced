import React, { Component } from 'react';
import { Link } from 'react-router';


class App extends Component {
  render(){
    return (
      <div className="container">
        <div className="row" style={{padding: '30px'}}>
          <div className="col-md-4 col-md-offset-2">
            <Link to={`/todo`}><h1>Todos App</h1></Link>
          </div>
          <div className="col-md-4 col-md-offset-2">
            <Link to={`/apptwo`}><h1>App Two</h1></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
