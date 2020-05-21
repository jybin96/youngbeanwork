import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './community.css';

class Community extends Component {
    render()
    {
      return (
      
      <div className="c">
        <div className="d">
          <h2>
          <Link to = "/community"> Community
          </Link>
          </h2>
        </div>
          <ol>
            <Link to = "/community">
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
            <li>내용</li>
            </Link>
          </ol>
      </div>
      
      );
    }
  }

  export default Community