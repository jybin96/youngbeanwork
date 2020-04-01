import React from 'react';


class Loginpage extends React.Component{

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
                alert('로그인성공');
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
            <div>
                <form onSubmit={onSubmit}>
                <label>아이디</label>
                <input type="text" name="id" value={id} onChange={onChange}/>
                <label>비밀번호</label>
                <input type="password" name="pw" value={pw} onChange={onChange}/>
                <button type="submit" id="submit">로그인</button>
                </form>
            </div>
        )
    }
}

export default Loginpage;