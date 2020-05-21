import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './employment.css';

class Employment extends Component {
    render()
    {
      return (
        
      <div className="e">
        <div className="f">
          <Link to="/employment">
          <h2>취업진로</h2>
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

  export default Employment