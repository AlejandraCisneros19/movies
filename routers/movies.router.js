const express = require('express'); //Importar express
const router = express.Router();    //Importar router
const movieController = require('../controllers/movies.controller'); //Importar booksController
const authMidleware = require('../utils/auth.midleware');

router.get('/', movieController.getMovies);

router.get('/:movieId', movieController.getMoviesbyId);

router.post('/', authMidleware.authenticateToken, movieController.newMovie);

router.post('/', movieController.newMovie);

router.put('/:movieId', movieController.updateMovie);

router.delete('/:movieId', movieController.deleteMovie);

module.exports = router;