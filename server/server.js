var app = require('./config/express')();
require('./app/persistence/database')();

app.listen(3000,function(){
    console.log("servidor rodando na porta 3000.");
  
});

