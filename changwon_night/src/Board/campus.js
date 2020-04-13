import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './campus.css';
class Campus extends Component {
    render()
    {
      return (
        
      <div className="g">
        <div className="h">
          <Link to="/campus">
          <h2>Campus</h2>
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

  export default Campus