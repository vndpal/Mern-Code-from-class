const bodyParser = require('body-parser');
const express = require('express')
const app = express()
const port = 3000

let numberOfRequests = 0;
function middleware(req,res,next){
    numberOfRequests++;
    console.log("Number of Requersts",numberOfRequests);
    next();
}

app.use(middleware);
app.use(bodyParser.json());

function calculateSum(counter) {
    var sum = 0;
    for (var i =0 ; i<=counter; i++) {
        sum = sum + i;
    }
    return sum;
}

function calculateMul(counter) {
    var sum = 1;
    for (var i =1 ; i<counter; i++) {
        sum = sum * i;
    }
    return sum;
}

function handleFirstRequest(req, res) {
    var counter = req.body.num;
    var calculatedSum = calculateSum(counter);
    var calculatedMul = calculateMul(counter);

    const respond = {
        "sum":calculatedSum,
        "mul":calculatedMul
    }
    res.status(200).send(respond);
}

function createUser(req, res) {
    res.send("hello world");
}

function getPage(req,res){
//     res.send(`<header>
//     <title>MERN title</title>
// </header>
// <body>
// <h1>this is body </h1>
    
// </body>`)
res.sendFile(__dirname+'/index.html');
}

app.post('/handleSum', handleFirstRequest)
app.put('/createUser', createUser)
app.post('/createUser',(req,res)=>{
    const mreq = req.headers.test;
    return res.send(mreq);
})

app.get('/getpage',getPage)

function started() {
    console.log(`Example app listening on port ${port}`)
}

app.listen(port, started)

