const http = require('http')
const express= require('express')
const path = require('path')
const fs = require('fs')
let bodyparser =require('body-parser')
const app= express()

const home= fs.readFileSync('./index.html','utf-8')
app.use(express.static('./public'))

app.get('/',  (req,res)=>{
    res.sendFile(path.resolve(__dirname,'index.html'))
})
app.get('/services.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'services.html'))
})
app.get('/about.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'about.html'))
})
app.get('/faq.html',(req,res)=>{
    res.sendFile(path.resolve(__dirname,'faq.html'))
})

// let jsonParser = bodyparser.json()

// let urlencodedParser = (bodyparser.urlencoded({ extended: false }))

// app.post('/', urlencodedParser, function(req, res){
//     let Name1 = req.body
//     app.use(bodyparser.text({ type: 'text/html' }))

//     let outputToWrite = `the name of the client is ${Name1}.The emailid is ${Email1}.`
//     fs.writeFileSync('output.txt', outputToWrite)
//     res.status(200).render('index.html');
// })

var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({
   extended: false
}));

app.use(bodyParser.json());

app.get('/', function(req, res){
  res.render('form');// if jade
  // You should use one of line depending on type of frontend you are with
 res.sendFile("index.html"); //if html file is within public directory
});

app.post('/',function(req,res){
    var Name1 = req.body.Name1;
    var Email1 = req.body.Email1;
    // var nameData = 'Hello:' + Name1;
    // var emaildata = 'Hello:' + Email1;
    // res.send(nameData);
    // res.send(emaildata);
    // console.log(nameData);
    // console.log(emaildata);
    let outputToWrite = `the name of the client is ${Name1}.The emailid is ${Email1}.`
    fs.writeFileSync('output.txt', outputToWrite)
 });

app.listen(80)