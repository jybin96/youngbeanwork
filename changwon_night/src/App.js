import React from 'react';
import Login from './main';
import Search from './search';
import Top from './top5';
import './app.css';


function App() {
  return (
    <div className="App">
      <div className="middle">
        <Login/>
        <Top/>
      </div>
      <Search/>
    </div>
  );
}

export default App;
