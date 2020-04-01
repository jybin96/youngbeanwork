const express = require('express')
const app = express()
const port = 3001
const cors = require('cors');
var mysql = require('mysql');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');


var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'snsk3779@',
    database: 'user'
  });
connection.connect();

app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());
app.use(bodyParser.json());



app.post('/log',function(req,res){
    console.log(req.body);
    var id = req.body.id;
    var pw = req.body.pw;
    var email = req.body.email;
    connection.query('INSERT INTO signin (id, pw, email) VALUES(?, ?, ?)',[id,pw,email],function(err,rows,fields){
        console.log('완료');
        
    })

    
})
app.post('/admin',function(req,res){
    var id = req.body.id;
    var pw = req.body.pw;
    connection.query('select pw from signin where id=?',[id],function(err,rows,fields){
       
        var admin = new Object();
        admin.boolean = false;
        if(rows[0]===undefined){ //쿼리문항목안나오면
            res.send(admin);
            
        }else if(rows[0].pw===pw){ //일치할떄
            admin.boolean = true;
            res.send(admin);
            
        }else{                        //쿼리 비번이랑 받아온 비번이랑 안맞을떄
            res.send(admin);
            
        }
        
    })
    
    
})

app.post('/user',function(req,res){
    var ids = req.body.id;
    connection.query('select id from signin where id=?',[ids],function(err,rows,fields){
             res.json(rows);
    })
})
app.post('/email',function(req,res){
    let email = req.body.email;
    let number = Math.floor(Math.random() * 1000000)+100000;
    let changwonemail = '@changwon.ac.kr';
    if(number>1000000){
       number = number - 100000;
    }
    
   
    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'wjddudqls96@gmail.com',
            pass: 'snsk3779'  
        }
    });

    let mailoption = {
        from:'wjddudqls96@gmail.com',
        to:email.concat(changwonemail),
        subject: '창원대의 밤 인증번호를 확인하세요!',
        text: `${number}`
    };

    transporter.sendMail(mailoption, function(error, info){
        if (error) {
          console.log(error);
        }
        else {
            var ajson = new Object();
            ajson.emailsearch=number
            console.log(mailoption);
            
            console.log(ajson);
            
            res.send(ajson);
        }
      });
})





app.listen(port, () => console.log(`Example app listening on port ${port}!`))