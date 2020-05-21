import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './notice.css';
class Notice extends Component {
    render()
    {
      return (
        
      <div className="a">
        <div className="b">
          <Link to="/notice">
          <h2>학사공지</h2>
          </Link>
        </div>
          <ol>
            <li><a href = "1.html">내용</a></li>
            <li><a href = "2.html">내용</a></li>
            <li><a href = "3.html">내용</a></li>
            <li><a href = "3.html">내용</a></li>
            <li><a href = "3.html">내용</a></li>
          </ol>
      </div>
      );
    }
  }

  export default Notice