import React from 'react';
import App2 from './app2';
import Admin from './admin';
import Signin from  './signin/signin';
import { Route } from 'react-router-dom';
import './app.css';


function App() {
  return (
    <div>
      <Route exact path="/" component={App2}/>
      <Route exact path="/signinpage" component={Signin}/>
      <Route exact path="/admin" component={Admin}/>
    </div>
  );
}

export default App;
