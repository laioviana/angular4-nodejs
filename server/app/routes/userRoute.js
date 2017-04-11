module.exports = function(app) {

    app.post('/login', function(req,res){
        var api = new app.api.UserBusiness(app);
        api.login(req,res);
    });
};