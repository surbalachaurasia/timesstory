
import './App.css';

import React, { Component } from 'react'
import Nav from './componant/Nav';
import New from './componant/New';


export class App extends Component {
  render() {
    return (
      <div>
          <Nav/>
          <New/>
          

      </div>
    )
  }
}

export default App