var express        = require('express');
var mongoose       = require('mongoose');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var flash          = require('connect-flash');
var session        = require('express-session');
var passport       = require('./config/passport');
var path           = require('path');
var app = express();

const apiRouter = require('./routes/index')

// DB setting
mongoose.connect('mongodb://localhost/insec_db', { useNewUrlParser: true });
var db = mongoose.connection;
db.once('open', function() {
    console.log('DB connected');
});
db.on('error', function(err) {
    console.log('DB ERROR : ', err);
});

app.use('/', apiRouter)

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.use(flash());
app.use(session({secret:'MySecret', resave:true, saveUninitialized:true}));
app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, 'client/build/index.html'))
});

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Custom Middlewares
app.use(function(req,res,next){
    res.locals.isAuthenticated = req.isAuthenticated();
    res.locals.currentUser = req.user;
    next();
})

module.exports = app;
