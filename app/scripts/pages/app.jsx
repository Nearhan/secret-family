import React from 'react';
import { RouteHandler } from 'react-router';
import Header from '../components/header.jsx'

class App extends React.Component {
  
  render() {
    return (
      <div style={{height: '100%'}}>
        <div className="content" style={{height: '100%'}}>
          <RouteHandler/>
        </div>
      </div>
    );
  }

}

export default App;
