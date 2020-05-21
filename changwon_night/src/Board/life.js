import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './life.css';
class Life extends Component {
    render()
    {
      return (
        
      <div className="i">
        <div className="j">
        <Link to ="/Life">
          <h2>생활정보</h2>
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

  export default Life