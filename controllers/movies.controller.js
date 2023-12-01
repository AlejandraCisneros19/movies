const moviesModel = require('../models/movies.model');
const Movie = require('../models/movies.model');

exports.getMovies = async (req, res) => {
    try{
        const movies = await Movie.find();
        return res.status(200).json({
            message : "Consulta de peliculas",
            data: movies
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar peliculas",
            data: error
        });
    }
}

exports.getMoviesbyId = async (req, res) => {
    const movieId = req.params.movieId;
    try{
        const movies = await Movie.findById(); //Acceder a los parametros
        return res.status(200).json({
            message : "Consultando pelicula por ID: " + movieId,
            data: movies
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al consultar pelicula por ID",
            data: error
        });
    }
}

exports.newMovie = async (req, res) => {
    try{
        const { nombre, director, año, duracion, genero } = req.body;
        const newMovie = new Movie ({ nombre, director, año, duracion, genero }); //Acceder al body
        await newMovie.save();

        return res.status(200).json({
            message : "Pelicula creada",
            data : newMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al crear pelicula",
            data: error
        });
    }
}

exports.updateMovie = async(req, res) => {
    const movieId = req.params.movieId;
    const newData = req.body;
    try{
        const updateMovie = await Movie.findByIdUpdate(movieId, newData,{new:true});

        return res.status(201).json({
            message : "Actualizar pelicula por ID: ",
            data : updateMovie
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al actualizar pelicula",
            data: error
        });
    }
}

exports.deleteMovie = async(req, res) => {
    const movieId = req.params.movieId;
    try{
        await Movie.findByIdAndDelete(movieId);

        return res.status(200).json({
            message : "Pelicula eliminado con Id: " + movieId,
        });
    }catch(error){
        return res.status(500).json({
            message : "Error al eliminar pelicula",
            data: error
        });
    }
}