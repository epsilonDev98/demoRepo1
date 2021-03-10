//1....importing modules
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var path = require('path');
const config =require('./config/database')


var app = express();
const route = require('./routes/route');



mongoose.connect(config.databse)
let db=mongoose.connection
//check connection

db.once('open',function(){
    console.log("connected to mongodb");
    
})

//check for db error
db.on('error',function(err){
    if(err){
        console.log("Something went Wrong",err);
    
    }
   
})


// bring in models
let Contact=require('./models/contacts')

const port = 3000;
// middle ware parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

//body-parser
app.use(bodyParser.json()); // here


//Adding middleware -cors
app.use(cors());

//Static Files
app.use(express.static(path.join(__dirname, 'public')));

// For routing
app.use('/api', route);

app.get('/', (req, res) => {
  res.send('Foobar');
});

app.listen(port, () => {
  console.log("Server started listening to port " + port);
})

