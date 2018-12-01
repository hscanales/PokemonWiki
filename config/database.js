var mongoose  = require('mongoose');
var exaports = {};


exaports = function(){

exaports.conection = mongoose.connect('mongodb://localhost/pokefilia', {useNewUrlParser : true});
var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: '));
db.once('open', function(){
    console.log("Workeo prro :v");
});

};


module.exports = exaports;