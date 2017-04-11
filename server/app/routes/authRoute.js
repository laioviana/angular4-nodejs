module.exports = function(app) {

    app.post('/authenticate', function(req, res) {
        var api = new app.api.AuthBusiness(app);
        api.authenticate(req, res);
    });
    app.use('/*', function(){
        var api = new app.api.AuthBusiness(app);
        api.checkToken();
    });
};