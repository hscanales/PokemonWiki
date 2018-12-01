const mongo = require('mongoose');


const puchamon  = mongo.model('Puchamon',{

    id: String,
    name: String,
    AtkFav: String,
    Pokedex: Number


});

module.exports = puchamon;

