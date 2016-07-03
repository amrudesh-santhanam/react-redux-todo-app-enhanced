import React, {Component} from 'react';
import { Link } from 'react-router';

const AppTwo = (props) => {
  return(
    <div className="container">
      <Link to={`/`}><div style={{marginBottom: '30px'}}>Back</div></Link>
      <h1>App 2</h1>
      <h3>Add something to do</h3>
    </div>
  );
}

export default AppTwo;
