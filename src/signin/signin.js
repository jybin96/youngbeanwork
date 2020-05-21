/* eslint-disable */       //eslint경고 삭제
import React from 'react';
import './login.css'


class Longin extends React.Component{
    constructor(props){
        super(props);
        this.state={
            id:'',//아이디
            nickname:'',
            pw:'',//비밀번호
            pw2:'',//비밀번호확인
            email:'',//이메일
            emailsearch:0, //인증번호
            number:'',//이메일 인증번호 입력
            idcheck:'',//아이디 체크
            pwdiv:"8자리 이상 특수문자 영문자 숫자로 구성",
            pwcheck:'',
            nicknamecheck:'',
            check:false,
            pwinput:true
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.checkid = this.checkid.bind(this);
        this.checknickname = this.checknickname.bind(this);
        this.checkpw = this.checkpw.bind(this);
        this.checkemail = this.checkemail.bind(this);
        this.checkemail2 = this.checkemail2.bind(this);
    }
    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,

          });
    }
    

    onSubmit(e){
        e.preventDefault();
        const post = {
            id:this.state.idcheck,
            pw:this.state.pwcheck,
            nickname:this.state.nicknamecheck,
            email:this.state.email
        }
        if(this.state.idcheck==='')
        {
            alert("아이디 중복체크를 하세요");
        }
        else if(this.state.pwcheck===''){
            alert("비밀번호 확인을 하세요");
        }else if(this.state.check===false){
            alert("이메일 인증을 받으세요!");
        }
        else{//post전송
            fetch('http://localhost:3001/log',{
                method : "post",
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify(post)
            })
            .then(alert("회원가입 완료"))
            .then(this.props.history.push("/"));
        }
        
    }

    checkid(e){  //아이디 중복검사
        var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
        e.preventDefault();
        if((special_pattern.test(this.state.id)===true)||(this.state.id.search(/\s/) != -1)||this.state.id.length < 5||this.state.id.length > 20)
        {
            alert("5~20자의 영문 숫자만 사용가능합니다");
        }
        else{
            const post = {
                id:this.state.id
            }
            if(this.state.id==='')
            {
                alert("아이디 입력요망");
            }else{
                fetch('http://localhost:3001/user',{
                method:"post",
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify(post)
            })
            .then(res => res.json())
            .then(json => {
              if (json[0] === undefined) {
                alert("사용가능 한 아이디입니다");
                this.setState({
                  idcheck: this.state.id 
                })}
               else {
                alert("이미 존재하는 아이디입니다");
              }
            });
            }
        }

        
        

    };
    checknickname(e){  //닉네임 중복검사
        e.preventDefault();
        
            const post = {
                nickname:this.state.nickname
            }
           
                fetch('http://localhost:3001/nickname',{
                method:"post",
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify(post)
            })
            .then(res => res.json())
            .then(json => {
              if (json[0] === undefined) {
                alert("사용가능 한 별명입니다");
                this.setState({
                  nicknamecheck: this.state.nickname
                })}
               else {
                alert("이미 존재하는 별명입니다");
              }
            });
        }
    checkpw(e){
        e.preventDefault();
        var pattern1 = /[0-9]/;	 //숫자
        var pattern2 = /[a-zA-Z]/;//영어
        var pattern3 = /[~!@#$%^&*()_+|<>?:{}]/;//특수문자

        if(!pattern1.test(this.state.pw) || !pattern2.test(this.state.pw) || !pattern3.test(this.state.pw) || this.state.pw.length < 8)
        {
            alert("비밀번호 형식은 8자리 이상 특수문자 영문자 숫자로 구성되어야합니다!")
        }
        else{

            if(this.state.pw==='')
            {
                alert('비밀번호를 입력해주세요!');
            }
            else if(this.state.pw===this.state.pw2)
            {

                this.setState({
                pwdiv: '비밀번호가 일치합니다',
                pwinput:false,
                pwcheck:this.state.pw
            })
            }else{
                this.setState({
                    pwdiv: '비밀번호가 일치하지않습니다.',
                })
            }
        }
       
        
    };
    checkemail(e){
        var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;

        e.preventDefault();
        if((special_pattern.test(this.state.email)===true)||(this.state.email.search(/\s/) != -1)){
            alert("형식이 옳바르지 않습니다")

        }else{
            const email = {
                email:this.state.email
            }
            alert(`${this.state.email}@changwon.ac.kr으로 인증번호 확인하세요! (1~2분소요가능)`)
            fetch('http://localhost:3001/email',{
                method:"post",
                headers : {
                    'content-type':'application/json'
                },
                body:JSON.stringify(email)
            })
            .then(res => res.json())
            .then(json => {
                this.setState({
                    emailsearch:json.emailsearch
                })
               
                 
            })
        }
        
    }
    checkemail2(e){ //인증번호 확인
        e.preventDefault();
        if((this.state.number)*1===this.state.emailsearch)
        {
            alert("확인완료");
            this.setState({
                check:true
            })
        }
        else
        {
            alert("다시확인");
        }
        
    }
    render(){//회원가입
        const {id,nickname,pw,pw2,email,number} = this.state;
        const {onChange,onSubmit} = this;
        return(
            <div className="form">
                <div className="title">
                    <h3>회원가입을 환영합니다!</h3>
                </div>
                <form onSubmit={onSubmit}>
                    <div className="idinput">
                        <label>아이디:</label>
                        <input type="text" name="id" value={id} onChange={onChange}/>
                        <button onClick={this.checkid}>중복체크</button>
                    </div>
                    <div className="nickinput">
                        <label>별명:</label>
                        <input type="text" name="nickname" value={nickname} onChange={onChange}/>
                        <button onClick={this.checknickname}>중복체크</button>
                    </div>
                    <div className="pwinput">
                        <label>비밀번호:</label>
                        <input type="password" name="pw" value={pw} onChange={onChange} disabled={(this.state.pwinput)? "" : "disabled"}/>
                    </div>
                    <div className="pw2input">
                        <label>비밀번호확인:</label>
                        <input type="password" name="pw2" value={pw2} onChange={onChange} disabled={(this.state.pwinput)? "" : "disabled"}/>
                        <div id="pwdiv">
                        <p>{this.state.pwdiv}</p>
                        </div>
                        <button  onClick={this.checkpw}>비밀번호확인</button>
                    </div>
                    <div className="emailinput">
                        <label>이메일:</label>
                        <input type="text" name="email" value={email} onChange={onChange} placeholder="e-mail"/>
                        <div className="changwonackr">
                            <p>@changwon.ac.kr</p>
                        </div>
                        <button onClick={this.checkemail}>인증보내기</button>
                        <div className="emailsearch">
                            <label>인증번호입력:</label>
                            <input type="text" name="number" value={number} onChange={onChange} placeholder="6자리입력"/>
                            <button onClick={this.checkemail2}>인증확인</button>
                        </div>
                    </div>
                    <button type="submit" id="submit" >회원가입</button>
                </form>
            </div>
        )
    }

}


export default Longin;