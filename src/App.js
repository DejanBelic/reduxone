import React, { Component } from 'react';
import './App.css';
import List from './List.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="col-md-4 offset-md-1">
          <h2>Articles</h2>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
