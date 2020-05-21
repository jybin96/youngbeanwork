import React, { Component } from 'react';
import Adminbox from './main/main2';
import Search from './search/search';
import Top from './top5/top5';
import Notice from './Board/notice';
import Community from './Board/community';
import Employment from './Board/employment';
import Campus from './Board/campus';
import Life from './Board/life';


class Admin extends Component {

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
                <Adminbox history={this.props.history} location={this.props.location}/>
                <Top/>
              </div>
              <Search/>
              <Notice/>
              <Community/>
              <Employment/>
              <Campus/>
              <Life/>
            </div>
          );
    }
  
}

export default Admin;
