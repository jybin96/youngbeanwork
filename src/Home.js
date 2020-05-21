import React, { Component } from 'react';
import Login from './main/main';
import Search from './search/search';
import Top from './top5/top5';
import Notice from './Board/notice';
import Community from './Board/community';
import Employment from './Board/employment';
import Campus from './Board/campus';
import Life from './Board/life';

import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';

import { Editor } from '@toast-ui/react-editor';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';

class Home extends Component {
  editorRef = React.createRef();
 
  handleClickButton = () => {
    this.editorRef.current.getRootElement().classList.add('my-editor-root');
  };


  componentDidMount(){
    window.history.pushState(null, null, window.location.href);
    window.onpopstate = function(event) {
    window.history.go(1);
};
}
  
    render(){
        return (
          <>
            <div className="App">
              <div className="middle">
                <Login history={this.props.history}/>
                <Top/>
              </div>
              <Search/>
              <Notice/>
              <Community/>
              <Employment/>
              <Campus/>
              <Life/>
            </div>
            <Editor
              hideModeSwitch='true'
              initialEditType='wysiwyg'
              plugins={[colorSyntax]}
              ref={this.editorRef}
            />
            <button onClick={this.handleClickButton}>Click!</button>
          </>
          );
    }
  
}

export default Home;
