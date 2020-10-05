import React from 'react';
import './App.css';

import Sidebar from './Components/Sidebar/Sidebar'

function App() {
  return (
    //bem naming convention
    <div className="App">
      <div className="app__body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
