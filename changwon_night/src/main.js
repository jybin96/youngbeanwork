import React, { Component } from 'react';
import './login.css'; 





class Login extends Component{

    render(){
        return(
            <div className="logbox">
                <div className="idpwbox">
                       <input type="text" id="userid" name="userid" placeholder="아이디"></input>
                       <input type="password" id="passwd" name="passwd" placeholder="비밀번호"></input>
                    <div className="loginsubmit">
                        <a href="/">Login</a>
                    </div>
                    <ul id="sign">
                        <li>
                           <a href="/">회원가입</a>
                        </li>
                        <li>
                        <a href="/">ID/PW찾기</a>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}


export default Login;