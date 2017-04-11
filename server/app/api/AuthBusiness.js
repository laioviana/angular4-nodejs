var jwt  = require('jsonwebtoken'); 

function AuthBusiness(app) {
    this._app = app;
}

AuthBusiness.prototype.authenticate = function(req, res) {
    var userDAO = new this._app.dao.UserDAO();
    app = this._app;
    userDAO.findOne({
        username: req.body.username,
        password: req.body.password
    }, function(error,user){
        if(error){
            console.log(error);
            res.sendStatus(500);
        }
        if(!user){
            console.log('Wrong username or password');
            res.sendStatus(401);
        } else {
            console.log(app.get('jwtSecret'));
            var token = jwt.sign({login: user.username}, app.get('jwtSecret'), {  
                expiresIn: 84600
            });
            console.log('Authenticated: token added to response');
            res.set('x-access-token', token); 
            console.log(token);
            res.end(); 
        }
    })
}

AuthBusiness.prototype.checkToken = function(req, res, next) {
     var token = req.headers['x-access-token'];
     if (token) {
            console.log('Token received, decoding...');
            jwt.verify(token, app.get('secret'), function(err, decoded) {
                if (err) {
                    console.log('Token rejected');
                    return res.sendStatus(401);
                } else {
                    console.log('Token accepted')
                    req.usuario = decoded;    
                    next();
                }
        });
    } else {
        console.log('No token sent');
        return res.sendStatus(401);
    }
}

module.exports = function() {
    return AuthBusiness;
}