import React, { Component } from 'react';
import Main from './components/main/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Main data={this.props.appData}/>
      </div>
    );
  }
}

export default App;
