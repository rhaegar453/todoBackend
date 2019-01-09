var express=require('express');
var path=require('path');
var favicon=require('serve-favicon');
var logger=require('morgan');
var bodyParser=require('body-parser');
var formidable=require('express-formidable');
var fileUpload=require('express-fileupload');
var fs=require('fs')
var respond=require('./config/respond');
var cors=require('cors');

require('dotenv').config();
var auth=require('./routes/auth');
var tasks=require('./routes/task');
var indexRoutes=require('./routes/index');


var mongoURI="mongodb://"+process.env.dbusername+":"+process.env.dbpassword+"@ds060749.mlab.com:60749/todoapplication123";
var mongoose=require('mongoose');
mongoose.connect(mongoURI).then((data)=>console.log('Successfully connected to mongo')).
catch((err)=>{
  console.log('Something went wrong', err);
});

var app=express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, 'build')));


app.use('/', indexRoutes);
app.use('/api/auth', auth);
app.use('/api/tasks', tasks);


app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.json(respond(false, "Error Occured"+err.message));
});

module.exports = app;