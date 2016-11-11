/**
 * Created by dantegg on 16-11-10.
 */
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')
var proxy = require('express-http-proxy')
var ejs = require('ejs')
var http = require('http')

var app = express()

app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser())
app.use(bodyParser.json())
app.use(expressSession({
    secret:'secret',
    resave:true,
    saveUninitialized:true,
    cookie:{
        maxAge:1000*60*10
    }
}))


app.use(function(req, res, next){
    res.locals.user = req.session.user;
    var err = req.session.error;
    res.locals.message = '';
    //if (err) res.locals.message = '<div style="margin-bottom: 20px;color:red;">' + err + '</div>';
    next();
});

app.engine('html', ejs.__express);
app.set('view engine','html')
app.set('port',process.env.PORT||3000)
app.use(express.static(__dirname+'/public'))

app.get('/',function (req,res) {
    res.redirect('/index')
})

app.get('/index*',function (req,res) {
    req.session.user = 'dantegg'
    res.render('index.html')
})

app.get('/test*',function (req,res) {
    console.log(req.session)
    res.render('test.html')
})

app.get('/api*',function (req,res) {
    //console.log('zzz',req.url)
    var opt = {
        host:'192.168.11.123',
        port:'80',
        method:'GET',//这里是发送的方法
        path:'/findUserSimbol_User.action',     //这里是访问的路径
        headers:{
            'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8',
            'Accept': 'application/json, text/javascript,*/*'
        }
    }
    var body = ''
    var testreq = http.request(opt,function (result) {
        console.log("Got response: " + result.statusCode);
        result.on('data',function(d){
            body += d;
        }).on('end', function(){
            //console.log(result.headers)
            var resbody = JSON.parse(body)
            res.send(resbody)
            console.log(JSON.parse(body))
        });

    }).on('error', function(e) {
        console.log("Got error: " + e.message);
    })
    testreq.end();
})

//page 404
app.use(function (req,res) {
    // res.type("text/plain");
    // res.status(404);
    // res.send('404-Not Found');
    res.status(404);
    res.render('404');
})

//page 500
app.use(function(err,req,res,next){
    console.error(err.stack);
    // res.type('text/plain');
    res.status(500);
    // res.send('500-Server Error');
    res.render('500')

})

app.listen(app.get('port'),'192.168.11.188',function () {
    console.log('Express started on http://192.168.11.188:'+
        app.get('port')+';press Ctrl-C to terminate.');
})


