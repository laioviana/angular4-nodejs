var mongoose = require('mongoose');

function UserDAO(){
    this._model = mongoose.model('User');
}

UserDAO.prototype.findOne = function(userData,callback){
    this._model
        .findOne(userData)
        .then(function(user){
            callback(null,user);
        }, function(error){
            callback(error,null);
        })
        
}

UserDAO.prototype.list = function(callback){
    this._model.
        find({})
        .then(function(users){
            callback(null,users);
        }, function(error){
            callback(error,null);
            console.log(error);
        });
}

UserDAO.prototype.save = function(user,callback){
}

module.exports = function(){
	return UserDAO;
}