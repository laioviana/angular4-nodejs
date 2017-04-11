function UserBusiness(){

}

UserBusiness.prototype.login = function(callback){
    var userDAO = new app.dao.UserDAO();
    
}

module.exports = function(){
    return UserBusiness;
}