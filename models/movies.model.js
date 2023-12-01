const mongoose = require('mongoose');

let movieSchema = new mongoose.Schema({
    nombre : {type: String},
    director : {type: String},
    año : {type: String},
    duracion : {type: String},
    genero : {type: String}
});

module.exports = mongoose.model('Movie', movieSchema, 'movie'); 