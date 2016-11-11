/**
 * Created by dantegg on 16-11-10.
 */
var express = require('express')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var expressSession = require('express-session')
var ejs = require('ejs')

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
    res.sendfile('./views/index.html')
})

app.get('/test*',function (req,res) {
    console.log(req.session)
    res.sendfile('./views/test.html')
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


