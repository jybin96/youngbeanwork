import React, { Component } from 'react';
import Login from './main/main';
import Search from './search/search';
import Top from './top5/top5';



class App2 extends Component {
  


  componentDidMount(){
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
    window.history.go(1);
};
}
  
    render(){
        return (
            <div className="App">
              <div className="middle">
                <Login history={this.props.history}/>
                <Top/>
              </div>
              <Search/>
            </div>
          );
    }
  
}

export default App2;
