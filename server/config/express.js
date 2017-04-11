var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator'); 

module.exports = function(){
    
    var app = express();

    app.set('jwtSecret', '3xW86*<%eqR'); 
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    app.use(expressValidator());

    //consign é a evolução do express-load
    consign({cwd: 'app'})
        .include('model')
        .then('dao')
        .then('api')
        .then('persistence')
        .then('routes/authRoute.js')
        .then('routes')
        .into(app);

    return app;

}