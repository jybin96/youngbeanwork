import React from 'react';
import './login.css'; 
import { Link } from 'react-router-dom';




class Login extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',//아이디
            pw:'',//비밀번호
            admin:false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,

          });
    }

    onSubmit(e){
        e.preventDefault();
        const post ={
            id:this.state.id,
            pw:this.state.pw
        }
        fetch('http://localhost:3001/admin',{
            method: "post",
            headers : {
                'content-type':'application/json'
            },
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(json =>{
            if(json.boolean===false)
            {
                this.setState({
                    admin:false
                })
                alert('아이디비번다시확인!');
            }else{
                this.setState({
                    admin:true
                })
                window.localStorage.setItem('id',this.state.id)
                window.localStorage.setItem('admin',this.state.admin)
                this.props.history.push("/admin")
                
            }
           
        })
        
    }

    render(){
        const {id,pw} = this.state;
        const {onChange,onSubmit} = this;
        return(
            
            <div className="logbox">
                <div className="idpwbox">  
                    <form onSubmit={onSubmit}>                     
                    <input type="text" id="userid" name="id" placeholder="아이디" value={id} onChange={onChange}></input>
                       <input type="password" id="passwd" name="pw" placeholder="비밀번호" value={pw} onChange={onChange}></input>
                    <div className="loginsubmit">
                       <button type="submit">로그인</button>
                    </div>
                    </form>
                       
                    <ul id="sign">
                        <li>
                           <Link to='/signinpage'>회원가입</Link>
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