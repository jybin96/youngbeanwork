import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './community_board.css';

class community_board extends Component {
    render () {
        return(
            <div className="com_boardbox">
                <div>
                    <h2>community</h2>
                </div>
                <div className="com_boardtitle">
                    <tr>
                        <td><p>제목</p></td> 
                        <td><p>조회</p></td>
                    </tr>
                
                    <br></br><a> 자유게시판</a>조회수
                    <br></br><a> 유머게시판</a>조회수
                    <br></br><a> 새내기게시판</a>조회수
                    <br></br><a> 게시판</a>조회수
                </div>
            </div>
        )
    }
}
export default community_board;